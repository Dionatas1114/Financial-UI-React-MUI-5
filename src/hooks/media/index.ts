import * as React from 'react';
import { AxiosResponse } from 'axios';

import { mediaApi } from 'services/api';

export default function UseMedias(videoUrl: string) {
  const songNotIsPlaying = false;
  const [isPlaying, setIsPlaying] = React.useState<boolean>(songNotIsPlaying);
  const [audioUrl, setAudioUrl] = React.useState<string>('');
  const [songTitle, setSongTitle] = React.useState<string>('');

  const playSongHandler = () => setIsPlaying(!isPlaying);

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchMedia = async () => {
        try {
          const response: AxiosResponse<Blob> = await mediaApi.post('/audio/listen', {
            videoUrl,
          });

          const titleFromHeader = response?.headers['cache-control']?.toString() || '';
          const url = URL.createObjectURL(response?.data);

          setSongTitle(titleFromHeader);
          setAudioUrl(url);
          setIsPlaying(true);
        } catch (error) {
          console.error('Erro ao carregar o buffer de áudio:', error);
        }
      };

      if (isPlaying && audioUrl === '') fetchMedia();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [isPlaying]);

  return { audioUrl, isPlaying, songTitle, playSongHandler };
}
