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
}
