import { Box, IconButton } from '@mui/material';
import {
  PauseRounded as PauseIcon,
  PlayArrowRounded as PlayIcon,
  SkipNextRounded as NextIcon,
} from '@mui/icons-material';

interface PlayerControlProps {
  isPlaying: boolean;
  handlePlaySong: () => void;
}

export type { PlayerControlProps };

const PlayerControl = ({ isPlaying, handlePlaySong }: PlayerControlProps) => {
  const nextSongHandler = () => console.log('next music');

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton aria-label={isPlaying ? 'play' : 'pause'} onClick={handlePlaySong}>
        {isPlaying ? (
          <PauseIcon sx={{ fontSize: '3rem' }} />
        ) : (
          <PlayIcon sx={{ fontSize: '3rem' }} />
        )}
      </IconButton>
      <IconButton aria-label="next media control" onClick={nextSongHandler}>
        <NextIcon />
      </IconButton>
    </Box>
  );
};

export default PlayerControl;
