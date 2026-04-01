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

        <button
          onClick={handleLikeClick}
          className={`absolute top-2 right-2 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-zinc-900/80 hover:bg-zinc-800 transition-all
            ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100'}
          `}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          <Heart
            className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isLiked ? 'fill-purple-500 text-purple-500' : 'text-white'}`}
          />
        </button>

        {isCurrentTrack && (
          <div className="absolute bottom-2 right-2">
            <div className="flex gap-0.5">
              <div className={`w-0.5 h-2.5 md:h-3 bg-purple-500 rounded-full ${isPlaying ? 'animate-pulse' : ''}`} />
              <div className={`w-0.5 h-3.5 md:h-4 bg-purple-500 rounded-full ${isPlaying ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.2s' }} />
              <div className={`w-0.5 h-2.5 md:h-3 bg-purple-500 rounded-full ${isPlaying ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-sm md:text-base text-white truncate group-hover:text-purple-400 transition-colors">
          {track.title}
        </h3>
        <p className="text-xs md:text-sm text-zinc-400 truncate">{track.artist}</p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] md:text-xs text-zinc-500">{track.genre}</span>
          <span className="text-[10px] md:text-xs text-zinc-500">{formatDuration(track.duration)}</span>
        </div>
      </div>
    </div>
  );
}
