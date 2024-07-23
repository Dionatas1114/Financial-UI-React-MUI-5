// import * as React from 'react';
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

// interface AudioProps extends RefProps {
//   audioRef: React.RefObject<HTMLAudioElement>;
//   audio: string;
//   songEndHandler?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
//   timeUpdateHandler?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
// }

interface AudioProps {
  audioUrl: string;
  isPlaying: boolean;
  volume?: number;
  timeUpdateHandler?: (state: OnProgressProps) => void;
  // audioRef: React.RefObject<HTMLAudioElement>;
  // songEndHandler?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
}

export type { SongProps, AudioProps };

// export default function Audio({ audioRef, audio, timeUpdateHandler, songEndHandler }: AudioProps) {
//   return (
//     <audio
//       ref={audioRef}
//       src={audio}
//       onLoadedMetadata={timeUpdateHandler}
//       onTimeUpdate={timeUpdateHandler}
//       onEnded={songEndHandler}
//     />
//   );
// }

const Audio = ({ audioUrl, isPlaying, volume, timeUpdateHandler }: AudioProps) => (
  // Component hidden
  <Box sx={{ display: 'none' }}>
    <ReactPlayer
      url={audioUrl}
      playing={isPlaying}
      volume={volume}
      // onLoadedMetadata={timeUpdateHandler}
      // onTimeUpdate={timeUpdateHandler}
      onProgress={timeUpdateHandler}
      // onSeek={() => 50}
      stopOnUnmount
    />
  </Box>
);

export default Audio;
