import axios from 'axios';
import { useEffect, useState } from 'react';

const { VITE_JAMENDO_API_URL, VITE_JAMENDO_CLIENT_ID } = import.meta.env;

type Song = {
  id: string;
  name: string;
  artist_name: string;
  audio: string;
  album_name: string;
};

export default function useJamendoTracks(genero = 'rock') {
  const [songs, setSongs] = useState<Song[]>([]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const actualSong = songs[indexAtual];

  const handlePlaySong = () => {
    if (isReady) setIsPlaying((prev) => !prev);
  };

  const nextSongHandler = () => {
    console.log('next music');
    setIndexAtual((prev) => (prev + 1) % songs.length);
    setIsPlaying(false); // Evita que toque antes do carregamento
    setIsReady(false); // Reset readiness
  };

  useEffect(() => {
    const delayDebounceFetch = setTimeout(async () => {
      try {
        const { data } = await axios.get(`${VITE_JAMENDO_API_URL}/tracks/`, {
          params: {
            client_id: VITE_JAMENDO_CLIENT_ID,
            format: 'json',
            limit: 5,
            audioformat: 'mp31',
            include: 'musicinfo',
            tags: genero,
          },
        });
        setSongs(data.results);
      } catch (err) {
        console.error('Erro ao buscar músicas:', err);
      }
    }, 500);
    return () => clearTimeout(delayDebounceFetch);
  }, [genero]);

  return {
    isPlaying,
    handlePlaySong,
    actualSong,
    nextSongHandler,
    setIsPlaying,
    setIsReady,
  };
}
