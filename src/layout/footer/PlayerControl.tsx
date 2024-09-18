import { Box, IconButton } from '@mui/material';
import { PauseRounded, PlayArrowRounded, SkipNextRounded } from '@mui/icons-material';

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
          <PauseRounded sx={{ fontSize: '3rem' }} />
        ) : (
          <PlayArrowRounded sx={{ fontSize: '3rem' }} />
        )}
      </IconButton>
      <IconButton aria-label="next media control" onClick={nextSongHandler}>
        <SkipNextRounded />
      </IconButton>
    </Box>
  );
};

export default PlayerControl;
