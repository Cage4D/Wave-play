import { tracks } from '../data/tracks';
import { TrackGrid } from '../components/TrackGrid';
import { useMusicContext } from '../MusicContext';
import { Heart } from 'lucide-react';

export function LikedSongs() {
  const { likedSongs } = useMusicContext();
  const likedTracks = tracks.filter((track) => likedSongs.has(track.id));

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        
      </div>

    </div>
  );
}
