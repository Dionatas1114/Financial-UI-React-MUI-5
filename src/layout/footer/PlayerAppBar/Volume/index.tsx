import { Box, IconButton, Popper } from '@mui/material';
import { VolumeOff, VolumeUp } from '@mui/icons-material';
import { VolumeSlider } from './styles';
import { useVolumeControl } from '../../../../hooks/media/useVolumeControl';

export type { VolumeProps };

type VolumeProps = ReturnType<typeof useVolumeControl>;

function Volume({
  volume,
  isActiveVolume,
  showSlider,
  anchorEl,
  handleMouseEnter,
  handleMouseLeave,
  handleSetVolume,
  handleActiveVolume,
}: VolumeProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ position: 'relative', display: 'inline-block' }}
      >
        <IconButton
          aria-label="Volume Icon"
          size="large"
          color="inherit"
          onClick={handleActiveVolume}
        >
          {!isActiveVolume ? <VolumeOff /> : <VolumeUp />}
        </IconButton>

        <Popper
          open={showSlider}
          anchorEl={anchorEl}
          placement="top"
          disablePortal
          modifiers={[{ name: 'offset', options: { offset: [0, 10] } }]}
        >
          <Box
            sx={{
              height: 100,
              px: 2,
              py: 1,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 3,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <VolumeSlider
              aria-label="Volume Slider"
              disabled={!isActiveVolume}
              value={volume}
              max={100}
              min={0}
              onChange={handleSetVolume}
              valueLabelDisplay="auto"
              orientation="vertical"
            />
          </Box>
        </Popper>
      </Box>
    </Box>
  );
}

export default Volume;
