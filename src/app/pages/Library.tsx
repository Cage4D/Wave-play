import { tracks } from '../data/tracks';
import { TrackGrid } from '../components/TrackGrid';
import { Music } from 'lucide-react';

export function Library() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl text-white mb-2">Your Library</h2>
        <p className="text-sm md:text-base text-zinc-400">All your music in one place</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-zinc-900/40 rounded-lg p-4 md:p-6 border border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Music className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-xl md:text-2xl text-white">{tracks.length}</p>
              <p className="text-xs md:text-sm text-zinc-400">Total Tracks</p>
            </div>
          </div>
        </div>
      </div>
      <TrackGrid tracks={tracks} />
    </div>
  );
}
