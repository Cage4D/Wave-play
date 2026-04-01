import { Track } from '../data/tracks';
import { TrackCard } from './TrackCard';
import { useMusicContext } from '../MusicContext';

interface TrackGridProps {
  tracks: Track[];
}

export function TrackGrid({ tracks }: TrackGridProps) {
  const { currentTrack, isPlaying, playTrack, isLiked, toggleLike } = useMusicContext();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
      {tracks.map((track) => (
        <TrackCard
          key={track.id}
          track={track}
          isPlaying={isPlaying}
          isCurrentTrack={currentTrack?.id === track.id}
          isLiked={isLiked(track.id)}
          onPlay={() => playTrack(track)}
          onLike={() => toggleLike(track.id)}
        />
      ))}
    </div>
  );
}
