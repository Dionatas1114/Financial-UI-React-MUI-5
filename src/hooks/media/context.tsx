import React, { useState, useEffect } from 'react';

const AudioPlayer: React.FC = () => {
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Função para carregar o buffer de áudio da sua API
    const loadAudioBuffer = async () => {
      try {
        const response = await fetch('URL_DA_SUA_API_PARA_O_AUDIO');
        const arrayBuffer = await response.arrayBuffer();
        const context = new AudioContext();
        const buffer = await context.decodeAudioData(arrayBuffer);
        setAudioBuffer(buffer);
        setAudioContext(context);
      } catch (error) {
        console.error('Erro ao carregar o buffer de áudio:', error);
      }
    };

    loadAudioBuffer();

    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  const playAudio = () => {
    if (audioContext && audioBuffer) {
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start(0);
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    if (audioContext) {
      audioContext.close();
      setAudioContext(null);
      setIsPlaying(false);
    }
  };

  return (
    <div>
      {isPlaying ? (
        <button onClick={stopAudio}>Parar Áudio</button>
      ) : (
        <button onClick={playAudio}>Reproduzir Áudio</button>
      )}
    </div>
  );
};

export default AudioPlayer;
