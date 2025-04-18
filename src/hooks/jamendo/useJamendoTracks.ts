import axios from 'axios';
import { useEffect, useState } from 'react';

type Song = {
  id: string;
  name: string;
  artist_name: string;
  audio: string;
  album_name: string;
};

export default function useJamendoTracks(genero = 'chillout') {
  const [songs, setSongs] = useState<Song[]>([]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioSource] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const actualSong = songs[indexAtual];

  const handlePlaySong = () => setIsPlaying((prev) => !prev);

  const nextSongHandler = () => {
    console.log('next music');
    setIndexAtual((prev) => (prev + 1) % songs.length);
    handlePlaySong();
  };

  useEffect(() => {
    async function buscarMusicas() {
      try {
        // const resp = await fetch(
        //   `${import.meta.env.JAMENDO_API_URL!}/tracks/?client_id=${import.meta.env
        //     .VITE_JAMENDO_CLIENT_ID!}&format=json&limit=5&audioformat=mp32&tags=${genero}`
        // );
        // const data = await resp.json();
        const { data } = await axios.get(`${import.meta.env.VITE_JAMENDO_API_URL}/tracks/`, {
          params: {
            client_id: import.meta.env.VITE_JAMENDO_CLIENT_ID,
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
      } finally {
        setIsPlaying(true);
      }
    }

    buscarMusicas();
  }, [genero]);

  return {
    songs,
    isPlaying,
    setIsPlaying,
    nextSongHandler,
    indexAtual,
    actualSong,
    handlePlaySong,
  };
}
