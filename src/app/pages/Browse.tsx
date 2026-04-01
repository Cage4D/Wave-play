import { tracks } from '../data/tracks';
import { TrackGrid } from '../components/TrackGrid';

export function Browse() {
  const tracksByGenre = tracks.reduce((acc, track) => {
    if (!acc[track.genre]) {
      acc[track.genre] = [];
    }
    acc[track.genre].push(track);
    return acc;
  }, {} as Record<string, typeof tracks>);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl text-white mb-2">Browse</h2>
        <p className="text-sm md:text-base text-zinc-400">Explore music by genre</p>
      </div>

      <div className="space-y-6 md:space-y-8">
        {Object.entries(tracksByGenre).map(([genre, genreTracks]) => (
          <div key={genre}>
            <h3 className="text-lg md:text-xl text-white mb-3 md:mb-4">{genre}</h3>
            <TrackGrid tracks={genreTracks} />
          </div>
        ))}
      </div>
    </div>
  );
}