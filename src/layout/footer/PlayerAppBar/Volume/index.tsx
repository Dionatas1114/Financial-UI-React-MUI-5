import { useState, useRef } from 'react';
import { Box, IconButton, Popper } from '@mui/material';
import { VolumeOff, VolumeUp } from '@mui/icons-material';
import { VolumeSlider } from './styles';

interface VolumeProps {
  volume: number | number[];
  isActiveVolume: boolean;
  handleActiveVolume: (event: React.MouseEvent<HTMLElement>) => void;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

export type { VolumeProps };

function Volume({ handleActiveVolume, isActiveVolume, volume, setVolume }: VolumeProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showSlider, setShowSlider] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setAnchorEl(event.currentTarget);
    setShowSlider(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowSlider(false);
    }, 500); // 500ms delay pra sumir
  };

  const handleSetVolume = (_: Event, _volume: number | number[]) => {
    if (isActiveVolume) {
      setVolume(_volume as number);
    } else {
      console.error('Error with volume button');
    }
  };

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
