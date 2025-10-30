import { useState, useEffect } from "react";

interface PlaylistItem {
  id: string;
  title: string;
  image: string;
  rating: number;
  year?: string;
  type?: "movie" | "tv" | "anime";
}

export const usePlaylist = () => {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);

  useEffect(() => {
    const savedPlaylist = localStorage.getItem("playlist");
    if (savedPlaylist) {
      setPlaylist(JSON.parse(savedPlaylist));
    }
  }, []);

  const addToPlaylist = (item: PlaylistItem) => {
    const updatedPlaylist = [...playlist, item];
    setPlaylist(updatedPlaylist);
    localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
  };

  const removeFromPlaylist = (id: string) => {
    const updatedPlaylist = playlist.filter((item) => item.id !== id);
    setPlaylist(updatedPlaylist);
    localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
  };

  const isInPlaylist = (id: string) => {
    return playlist.some((item) => item.id === id);
  };

  return {
    playlist,
    addToPlaylist,
    removeFromPlaylist,
    isInPlaylist,
  };
};
