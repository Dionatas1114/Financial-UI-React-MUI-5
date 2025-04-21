import { createContext, useContext } from 'react';

type Song = {
  id: string;
  name: string;
  artist_name: string;
  audio: string;
  album_name: string;
};

export type JamendoPlayerContextType = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  handlePlaySong: () => void;
  actualSong: Song;
  nextSongHandler: () => void;
};

export const JamendoPlayerContext = createContext<JamendoPlayerContextType | null>(null);

export const useJamendoPlayer = () => {
  const context = useContext(JamendoPlayerContext);
  if (!context) {
    throw new Error('useJamendoPlayer deve ser usado dentro de JamendoPlayerProvider');
  }
  return context;
};
