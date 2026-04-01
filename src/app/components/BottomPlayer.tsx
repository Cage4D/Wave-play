import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Heart } from 'lucide-react';
import { MusicSlider } from './MusicSlider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useMusicContext } from '../MusicContext';
import { tracks } from '../data/tracks';

interface BottomPlayerProps {
  onMenuClick: () => void;
}

export function BottomPlayer({ onMenuClick: _onMenuClick }: BottomPlayerProps) {
  const {
    currentTrack,
    isPlaying,
    setIsPlaying,
    setCurrentTrack,
    isLiked,
    toggleLike,
    currentTime,
    duration,
    seek,
    volume,
    setVolume,
  } = useMusicContext();

  const [isMuted, setIsMuted] = useState(false);
  const [volumeBeforeMute, setVolumeBeforeMute] = useState(0.7);

  
  const onNext = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    setIsPlaying(true);
  };

  const onPrevious = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex((t) => t.id === currentTrack.id);
    const previousIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
    setCurrentTrack(tracks[previousIndex]);
    setIsPlaying(true);
  };

  const handleProgressChange = (value: number[]) => {
    seek(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    const newVol = value[0] / 100;
    setVolume(newVol);
    if (newVol > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(volumeBeforeMute);
      setIsMuted(false);
    } else {
      setVolumeBeforeMute(volume);
      setVolume(0);
      setIsMuted(true);
    }
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentTrack) return null;

  const trackIsLiked = isLiked(currentTrack.id);
  const trackDuration = duration || currentTrack.duration;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 backdrop-blur-xl bg-opacity-95 z-50">
      <div className="px-3 md:px-4 py-2 md:py-3">
        <div className="mb-2">
          <MusicSlider
            variant="progress"
            value={[currentTime]}
            max={trackDuration}
            step={1}
            onValueChange={handleProgressChange}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-md overflow-hidden flex-shrink-0 shadow-lg">
              <ImageWithFallback
                src={currentTrack.coverUrl}
                alt={currentTrack.album}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs md:text-sm text-white truncate">{currentTrack.title}</p>
              <p className="text-[10px] md:text-xs text-zinc-400 truncate">{currentTrack.artist}</p>
            </div>
            <button
              onClick={() => toggleLike(currentTrack.id)}
              className="hidden sm:flex w-8 h-8 items-center justify-center rounded-full hover:bg-zinc-800 transition-colors flex-shrink-0"
              aria-label={trackIsLiked ? 'Unlike' : 'Like'}
            >
              <Heart
                className={`w-4 h-4 ${trackIsLiked ? 'fill-purple-500 text-purple-500' : 'text-zinc-400 hover:text-white'}`}
              />
            </button>
          </div>
          <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
            <span className="hidden sm:inline text-xs text-zinc-400 w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <button
              onClick={onPrevious}
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
              aria-label="Previous track"
            >
              <SkipBack className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white hover:bg-zinc-200 transition-all transform hover:scale-105"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 md:w-5 md:h-5 text-zinc-900 fill-zinc-900" />
              ) : (
                <Play className="w-4 h-4 md:w-5 md:h-5 text-zinc-900 fill-zinc-900 ml-0.5" />
              )}
            </button>

            <button
              onClick={onNext}
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
              aria-label="Next track"
            >
              <SkipForward className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
            <span className="hidden sm:inline text-xs text-zinc-400 w-10">
              {formatTime(trackDuration)}
            </span>
          </div>

          

          
          
          
          
        </div>
      </div>
    </div>
  );
}
