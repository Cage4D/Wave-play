export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  audioUrl: string; 
  duration: number; 
  genre: string;
}

export const tracks: Track[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artist: 'Tune Tank',
    album: 'Echoes',
    coverUrl: 'https://plus.unsplash.com/premium_photo-1691871551079-a3708434b211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2luZW1hdGljfGVufDB8fDB8fHww',
    audioUrl: '/audio/inspiring-cinematic-music.mp3',
    duration: 132,
    genre: 'Cinematic',
  },
  {
    id: '2',
    title: 'Epic',
    artist: 'Kornevmusic',
    album: 'Digital Horizons',
    coverUrl: 'https://images.unsplash.com/photo-1703115015343-81b498a8c080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBhbGJ1bSUyMGFydHxlbnwxfHx8fDE3NzQ5MTM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    audioUrl: '/audio/kornevmusic-epic.mp3',
    duration: 120,
    genre: 'Electronic',
  },
  {
    id: '3',
    title: 'Sport Rock Trailer',
    artist: 'Alex Grohl',
    album: 'Summer Roads',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    audioUrl: '/audio/sport-rock-trailer.mp3',
    duration: 128,
    genre: 'Rock',
  },
  {
    id: '4',
    title: 'Dark Cyberpunk',
    artist: 'FreeMusicLab',
    album: 'Night Sessions',
    coverUrl: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJwdW5rfGVufDB8fDB8fHww',
    audioUrl: '/audio/dark-cyberpunk.mp3',
    duration: 118,
    genre: 'Electronic',
  },
  {
    id: '5',
    title: 'No Sleep',
    artist: 'Kontraa',
    album: 'Concrete Jungle',
    coverUrl: 'https://images.unsplash.com/photo-1707412812345-5d85d6737a14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNoaWFyb3NjdXJvfGVufDB8fDB8fHww',
    audioUrl: '/audio/kontraa-no-sleep.mp3',
    duration: 166,
    genre: 'Hip Hop',
  },
  {
    id: '6',
    title: 'Embrace',
    artist: 'Evgeny Bardyuzha',
    album: 'Starlight',
    coverUrl: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXVyb3JhJTIwYm9yZWFsaXN8ZW58MHx8MHx8fDA%3D',
    audioUrl: '/audio/embrace.mp3',
    duration: 156,
    genre: 'Ambient',
  },
  {
    id: '7',
    title: 'Running Night',
    artist: 'AlexMakeMusic',
    album: 'Serenity',
    coverUrl: 'https://images.unsplash.com/photo-1614455786827-a842086f9b9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFmdCUyMHB1bmt8ZW58MHx8MHx8fDA%3D',
    audioUrl: '/audio/running-night.mp3',
    duration: 112,
    genre: 'Funk',
  },
  {
    id: '8',
    title: 'Static Glow',
    artist: 'The Mountain',
    album: 'Interference',
    coverUrl: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    audioUrl: '/audio/the_mountain-background-music.mp3',
    duration: 148,
    genre: 'Electronic',
  },
  {
    id: '9',
    title: 'Once In Paris',
    artist: 'Pumpupthemind',
    album: 'After Midnight',
    coverUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    audioUrl: '/audio/once-in-paris.mp3',
    duration: 132,
    genre: 'Atmospheric',
  },
  {
    id: '10',
    title: 'Happy',
    artist: 'Kornevmusic',
    album: 'Upbeat',
    coverUrl: 'https://images.unsplash.com/photo-1601011850287-43e30b7db748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5fGVufDB8fDB8fHww',
    audioUrl: '/audio/upbeat-happy.mp3',
    duration: 122,
    genre: 'Upbeat',
  },
];
