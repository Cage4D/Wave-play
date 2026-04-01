import { tracks } from '../data/tracks';
import { TrackGrid } from '../components/TrackGrid';


export function Home() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl text-white mb-2">Discover</h2>
        <p className="text-sm md:text-base text-zinc-400">Your personalized music collection</p>
      </div>
      <TrackGrid tracks={tracks} />
    </div>
  );
}