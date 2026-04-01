import { tracks } from '../data/tracks';
import { TrackGrid } from '../components/TrackGrid';
import { useMusicContext } from '../MusicContext';
import { Heart } from 'lucide-react';

export function LikedSongs() {
  const { likedSongs } = useMusicContext();
  const likedTracks = tracks.filter((track) => likedSongs.has(track.id));

  
}
