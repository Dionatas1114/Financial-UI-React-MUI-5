import * as MUI from '@mui/material';
import * as IconsMUI from '@mui/icons-material';

interface PlayerControlProps {
  isPlaying: boolean;
  handlePlaySong: () => void;
  nextSongHandler: () => void;
}

export type { PlayerControlProps };

const PlayerControl = ({ isPlaying, handlePlaySong, nextSongHandler }: PlayerControlProps) => (
  <MUI.Box sx={{ display: 'flex', alignItems: 'center' }}>
    <MUI.IconButton aria-label={isPlaying ? 'play' : 'pause'} onClick={handlePlaySong}>
      {isPlaying ? (
        <IconsMUI.PauseRounded sx={{ fontSize: '3rem' }} />
      ) : (
        <IconsMUI.PlayArrowRounded sx={{ fontSize: '3rem' }} />
      )}
    </MUI.IconButton>
    <MUI.IconButton aria-label="next media control" onClick={nextSongHandler}>
      <IconsMUI.SkipNextRounded />
    </MUI.IconButton>
  </MUI.Box>
);

export default PlayerControl;
