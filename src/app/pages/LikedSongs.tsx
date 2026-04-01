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
      {likedTracks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 md:py-20">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-zinc-900/40 flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-zinc-600" />
          </div>
          <h3 className="text-lg md:text-xl text-white mb-2">No liked songs yet</h3>
          <p className="text-sm md:text-base text-zinc-400 text-center max-w-md px-4">
            Songs you like will appear here. Click the heart icon on any track to add it to your collection.
          </p>
        </div>
      ) : (
        <TrackGrid tracks={likedTracks} />
      )}
    </div>
  );
}
