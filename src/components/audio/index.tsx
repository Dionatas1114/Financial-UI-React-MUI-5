import * as React from 'react';
import { Box } from '@mui/material';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
// import { RefProps } from 'components/button/Library';

interface SongProps {
  id: string;
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string[];
  active: boolean;
}

interface AudioProps {
  audioUrl: string;
  playerRef: any;
  isPlaying: boolean;
  volume?: number;
  timeUpdateHandler?: (state: OnProgressProps) => void;
  // audioRef: React.RefObject<HTMLAudioElement>;
  // songEndHandler?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
}

export type { SongProps, AudioProps };

const Audio = ({ audioUrl, playerRef, isPlaying, volume, timeUpdateHandler }: AudioProps) => {
  // const playerRef = React.useRef<ReactPlayer>(null);

  return (
    <Box sx={{ display: 'none' }}>
      <ReactPlayer
        url={audioUrl}
        ref={playerRef}
        playing={isPlaying}
        volume={volume}
        onProgress={timeUpdateHandler}
        stopOnUnmount
      />
    </Box>
  );
};

export default Audio;
