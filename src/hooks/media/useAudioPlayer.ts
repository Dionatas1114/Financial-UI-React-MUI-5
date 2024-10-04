import React from 'react';

import { mediaBlobApi } from '../../services/api';

export default function useAudioPlayer(videoUrl: string) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audioUrl, setAudioSource] = React.useState('');
  const [songTitle, setSongTitle] = React.useState('');

  const handlePlaySong = () => setIsPlaying((prev) => !prev);

  React.useEffect(() => {
    const delayDebounceFetch = setTimeout(async () => {
      if (isPlaying && !audioUrl) {
        try {
          const { data, headers } = await mediaBlobApi.post('/audio/stream', {
            videoUrl,
          });
          const songTitleFromHeader = headers['cache-control']?.toString() || '';
          const audioSource = URL.createObjectURL(data);

          setSongTitle(songTitleFromHeader);
          setAudioSource(audioSource);
        } catch (error) {
          console.error('Error fetching audio buffer:', error);
        }
      }
    }, 500);

    return () => clearTimeout(delayDebounceFetch);
  }, [isPlaying, audioUrl, videoUrl]);

  return { audioUrl, isPlaying, songTitle, handlePlaySong };
}
