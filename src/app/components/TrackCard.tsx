import React from 'react';
import { Play, Pause, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Track } from '../data/tracks';

interface TrackCardProps {
  track: Track;
  isPlaying: boolean;
  isCurrentTrack: boolean;
  isLiked: boolean;
  onPlay: () => void;
  onLike: () => void;
}

export function TrackCard({ track, isPlaying, isCurrentTrack, isLiked, onPlay, onLike }: TrackCardProps) {
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

}
