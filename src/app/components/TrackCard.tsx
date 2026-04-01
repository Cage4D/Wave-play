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

