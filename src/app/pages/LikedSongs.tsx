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
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl text-white mb-1">Liked Songs</h2>
            <p className="text-sm md:text-base text-zinc-400">{likedTracks.length} songs</p>
          </div>
        </div>
      </div>

    </div>
  );
}
