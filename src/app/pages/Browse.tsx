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
}