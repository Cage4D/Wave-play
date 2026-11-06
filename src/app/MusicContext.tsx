import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import { Track, tracks } from "./data/tracks";

interface MusicContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  likedSongs: Set<string>;
  setCurrentTrack: (track: Track | null) => void;
  setIsPlaying: (playing: boolean) => void;
  toggleLike: (trackId: string) => void;
  isLiked: (trackId: string) => boolean;
  playTrack: (track: Track) => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  volume: number;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrackState] = useState<Track | null>(null);
  const [isPlaying, setIsPlayingState] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.7);

  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());
  const audioRef = useRef<HTMLAudioElement | null>(null);

  
  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0.7;
    audioRef.current = audio;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

    const handleLoadedMetadata = () => setDuration(audio.duration);

    // Auto-advance: move to the next track (wrapping to the first) and keep
    // playing. The effect keyed on the track id loads and starts it.
    const handleEnded = () => {
      setCurrentTime(0);
      setCurrentTrackState((prev) => {
        if (!prev || tracks.length === 0) return prev;
        const i = tracks.findIndex((t) => t.id === prev.id);
        const next = tracks[(i + 1) % tracks.length];
        // Same id (single-track list) won't re-trigger the load effect, so replay here.
        if (next.id === prev.id) {
          audio.currentTime = 0;
          audio.play().catch(() => setIsPlayingState(false));
        }
        return next;
      });
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => setIsPlayingState(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;
    audio.src = currentTrack.audioUrl;
    audio.currentTime = 0;
    setCurrentTime(0);
    setDuration(0);
    if (isPlaying) {
      audio.play().catch(() => setIsPlayingState(false));
    }
  }, [currentTrack?.id]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const setCurrentTrack = (track: Track | null) => {
    setCurrentTrackState(track);
  };

  const setIsPlaying = (playing: boolean) => {
    setIsPlayingState(playing);
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const setVolume = (vol: number) => {
    setVolumeState(vol);
  };

  const toggleLike = (trackId: string) => {
    setLikedSongs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(trackId)) {
        newSet.delete(trackId);
      } else {
        newSet.add(trackId);
      }
      return newSet;
    });
  };

  const isLiked = (trackId: string) => likedSongs.has(trackId);

  const playTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlayingState(!isPlaying);
    } else {
      setCurrentTrackState(track);
      setIsPlayingState(true);
    }
  };

  return (
    <MusicContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        likedSongs,
        volume,
        setCurrentTrack,
        setIsPlaying,
        toggleLike,
        isLiked,
        playTrack,
        seek,
        setVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusicContext() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusicContext must be used within MusicProvider');
  }
  return context;
}
