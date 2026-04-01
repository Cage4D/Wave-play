import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Browse } from "./pages/Browse";
import { Library } from "./pages/Library";
import { LikedSongs } from "./pages/LikedSongs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,         
    children: [
      { index: true, Component: Home },              
      { path: "browse", Component: Browse },         
      { path: "library", Component: Library },      
      { path: "liked", Component: LikedSongs },  
    ],
  },
]);