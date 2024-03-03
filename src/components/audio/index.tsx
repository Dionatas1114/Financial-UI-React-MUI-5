import * as React from 'react';
import * as MUI from '@mui/material';
import ReactPlayer from 'react-player';

import { RefProps } from 'components/button/Library';

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
  // audioRef: React.RefObject<HTMLAudioElement>;
  // songEndHandler?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  // timeUpdateHandler?: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
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

const Audio = ({ audioUrl, isPlaying, volume }: AudioProps) => (
  // Component hidden
  <MUI.Box sx={{ display: 'none' }}>
    <ReactPlayer
      url={audioUrl}
      playing={isPlaying}
      volume={volume}
      // onLoadedMetadata={timeUpdateHandler}
      // onTimeUpdate={timeUpdateHandler}
    />
  </MUI.Box>
);

export default Audio;
