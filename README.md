# Wave-play
🎵 A dark-themed mini music player UI built with React + TypeScript. Features a persistent bottom player, genre browsing, liked songs, and global playback state via Context API.

A sleek, responsive music streaming web application built with React, TypeScript, and Tailwind CSS. Features Spotify-inspired UI elements with smooth animations, multi-page navigation, and an intuitive user experience.

## ✨ Features

- **Multi-Page Navigation** - Home, Browse, Library, and Liked Songs pages with React Router
- **Like/Unlike Songs** - Heart button on tracks and player to save favorites
- **Beautiful Album Grid** - Responsive card layout that adapts from 2 to 5 columns
- **Bottom Fixed Player** - Persistent music player that stays visible while browsing
- **Custom Sliders** - Spotify/YouTube Music-style sliders with smooth hover effects
- **Auto-Play Next** - Automatically advances to the next track when a song ends
- **Volume Control** - Adjustable volume with mute functionality
- **Browse by Genre** - Organized view of tracks grouped by music genre
- **Visual Feedback** - Animated visualizer bars on currently playing tracks
- **Smooth Transitions** - Polished hover effects and animations throughout
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **React 18.3.1** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible slider components
- **Lucide React** - Beautiful, consistent icons
- **Vite** - Lightning-fast build tool

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd waveplay

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or
pnpm build
```

## 🎨 Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Main app with router & context
│   ├── MusicContext.tsx           # Global state management
│   ├── routes.tsx                 # React Router configuration
│   ├── components/
│   │   ├── Layout.tsx             # App layout wrapper
│   │   ├── BottomPlayer.tsx       # Fixed bottom music player
│   │   ├── MusicSlider.tsx        # Custom slider component
│   │   ├── Sidebar.tsx            # Navigation sidebar
│   │   ├── TrackCard.tsx          # Individual track card
│   │   └── ui/                    # Reusable UI components
│   ├── pages/
│   │   ├── Home.tsx               # Discover page
│   │   ├── Browse.tsx             # Browse by genre
│   │   ├── Library.tsx            # All tracks library
│   │   └── LikedSongs.tsx         # Liked tracks collection
│   └── data/
│       └── tracks.ts              # Track data and types
└── styles/                        # Global styles
```

## 🎯 Key Components

### BottomPlayer
The heart of the player experience. Handles playback controls, progress tracking, volume, and track information display.

### MusicSlider
Custom-built slider with two variants:
- **Progress**: Hidden thumb that appears on hover, expands slightly
- **Volume**: Always-visible thumb with subtle styling

### TrackCard
Album card component with:
- Hover-triggered play button overlay
- Image zoom effect
- Animated visualizer for currently playing tracks
- Genre and duration display

## 🎨 Design Philosophy

This project prioritizes **polish and attention to detail**. Every interaction has been carefully considered:

- Sliders feel responsive and natural
- Hover states provide clear feedback
- Transitions are smooth but not sluggish
- The dark theme reduces eye strain during long listening sessions
- Typography is clear and hierarchical

## 🚀 Customization

### Adding New Tracks

Edit `/src/app/data/tracks.ts`:

```typescript
export const tracks: Track[] = [
  {
    id: '8',
    title: 'Your Song Title',
    artist: 'Artist Name',
    album: 'Album Name',
    coverUrl: 'https://your-image-url.com/cover.jpg',
    duration: 240, // seconds
    genre: 'Genre',
  },
  // ... more tracks
];
```

### Changing Colors

The app uses Tailwind's zinc color palette with purple accents. To customize:

- Primary accent: Search for `purple-500` and `purple-600`
- Dark backgrounds: `zinc-900`, `zinc-950`
- Borders and subtle elements: `zinc-800`, `zinc-700`

## 🎮 User Experience

1. **Navigate**: Use the sidebar to switch between Home, Browse, Library, and Liked Songs
2. **Browse Tracks**: Scroll through album grids on any page
3. **Play Music**: Click any album card to start playback
4. **Like Songs**: Click the heart icon on tracks or in the player to save favorites
5. **Control Playback**: Use the bottom player for play/pause, skip, and volume
6. **Seek**: Hover over the progress bar and drag to jump to any point
7. **Auto-Advance**: Tracks automatically proceed to the next song
8. **Browse by Genre**: Visit the Browse page to explore tracks organized by genre

## 📱 Responsive Design

- **Mobile (< 768px)**: 2-column grid, compact player
- **Tablet (768px - 1024px)**: 3-column grid
- **Desktop (1024px - 1280px)**: 4-column grid
- **Large Desktop (> 1280px)**: 5-column grid

## ⚡ Performance

- Lazy-loaded images with fallback support
- Efficient React hooks for state management
- CSS transitions for smooth animations
- Optimized bundle size with Vite

## 🙏 Credits

- Album cover images from [Unsplash](https://unsplash.com)
- Icons by [Lucide](https://lucide.dev)
- UI components by [Radix UI](https://www.radix-ui.com)

## 📄 License

This project is open source and available under the MIT License.

---

**Note**: This is a UI demonstration project. No actual audio playback is implemented - it's purely a visual and interaction design showcase. The player simulates playback with timers and state management.

Built with ❤️ and attention to detail.