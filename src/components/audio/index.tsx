import { Box } from '@mui/material';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';

interface SongInfoProps {
  currentTime: number;
  duration: number;
  animationPercent: number;
  volume: number;
}

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
  playerRef: React.RefObject<ReactPlayer>;
  isPlaying: boolean;
  volume?: number;
  timeUpdateHandler?: (state: OnProgressProps) => void;
  songInfo: SongInfoProps;
  setSongInfo: React.Dispatch<React.SetStateAction<SongInfoProps>>;
  nextSongHandler: () => void;
}

export type { SongInfoProps, SongProps, AudioProps };

const Audio = ({
  audioUrl,
  playerRef,
  isPlaying,
  volume,
  songInfo,
  setSongInfo,
  nextSongHandler,
}: AudioProps) => {
  const timeUpdateHandler = (state: OnProgressProps) => {
    setSongInfo({
      currentTime: Math.round(state.playedSeconds),
      duration: Math.round(state.loadedSeconds),
      volume: songInfo.volume,
      animationPercent: (Math.round(state.playedSeconds) / Math.round(state.loadedSeconds)) * 100,
    });
  };

  return (
    <Box sx={{ display: 'none' }}>
      <ReactPlayer
        url={audioUrl}
        ref={playerRef}
        playing={isPlaying}
        volume={volume}
        onProgress={timeUpdateHandler}
        onEnded={nextSongHandler}
        stopOnUnmount
      />
    </Box>
  );
};

export default Audio;
