import { useEffect, useState } from 'react';
import axios from 'axios';

const { VITE_JAMENDO_API_URL, VITE_JAMENDO_CLIENT_ID } = import.meta.env;

import { JamendoPlayerContext } from './JamendoPlayerContext';

type Song = {
  id: string;
  name: string;
  artist_name: string;
  audio: string;
  album_name: string;
};

export function JamendoPlayerProvider({ children }: ChildrenProps) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const actualSong = songs[indexAtual];

  const handlePlaySong = () => setIsPlaying((prev) => !prev);

  const nextSongHandler = () => {
    setIndexAtual((prev) => (prev + 1) % songs.length);
    setIsPlaying(false); // ou true, conforme fluxo desejado
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const { data } = await axios.get(`${VITE_JAMENDO_API_URL}/tracks/`, {
          params: {
            client_id: VITE_JAMENDO_CLIENT_ID,
            format: 'json',
            limit: 5,
            audioformat: 'mp31',
            include: 'musicinfo',
            tags: 'rock',
          },
        });
        setSongs(data.results);
        setIsPlaying(true);
      } catch (error) {
        console.error('Erro ao buscar músicas:', error);
      }
    };
    fetchSongs();
  }, []);

  return (
    <JamendoPlayerContext.Provider
      value={{ isPlaying, setIsPlaying, handlePlaySong, actualSong, nextSongHandler }}
    >
      {children}
    </JamendoPlayerContext.Provider>
  );
}
