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

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLike();
  };

  return (
    <div
      className="group relative bg-zinc-900/40 hover:bg-zinc-800/60 rounded-lg p-3 md:p-4 transition-all cursor-pointer"
      onClick={onPlay}
    >

      <div className="relative aspect-square mb-3 md:mb-4 rounded-md overflow-hidden shadow-lg">
        <ImageWithFallback
          src={track.coverUrl}
          alt={track.album}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-600 text-white transform scale-90 group-hover:scale-100 transition-transform shadow-lg"
            aria-label={isCurrentTrack && isPlaying ? 'Pause' : 'Play'}
          >
            {isCurrentTrack && isPlaying ? (
              <Pause className="w-4 h-4 md:w-5 md:h-5 fill-white" />
            ) : (
              <Play className="w-4 h-4 md:w-5 md:h-5 fill-white ml-0.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
