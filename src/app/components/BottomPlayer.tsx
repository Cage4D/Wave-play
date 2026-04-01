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

}
