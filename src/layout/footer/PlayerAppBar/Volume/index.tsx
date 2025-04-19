import { Box, Stack, IconButton } from '@mui/material';
import { VolumeOff, VolumeUp } from '@mui/icons-material';
import { CustomSlider } from '../SliderMediaProgress/styles';

interface VolumeProps {
  volume: number | number[];
  isActiveVolume: boolean;
  handleActiveVolume: (event: React.MouseEvent<HTMLElement>) => void;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

export type { VolumeProps };

function Volume({ handleActiveVolume, isActiveVolume, volume, setVolume }: VolumeProps) {
  const handleSetVolume = (_: Event, _volume: number | number[]) => {
    if (isActiveVolume) {
      setVolume(_volume as number);
      // setSongInfo({ ...songInfo, volume: volume as number });
    } else {
      console.error('Error with volume button');
    }
  };

  return (
    <Box sx={{ width: 200, mr: 1, display: { sm: 'block' } }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <IconButton
          aria-label="Volume Icon"
          size="large"
          color="inherit"
          onClick={handleActiveVolume}
        >
          {!isActiveVolume ? <VolumeOff /> : <VolumeUp />}
        </IconButton>
        <CustomSlider
          aria-label="Volume Slider"
          disabled={!isActiveVolume}
          value={volume}
          max={100}
          min={0}
          onChange={handleSetVolume}
          valueLabelDisplay="auto"
          sx={{ display: 'flex', alignItems: 'center' }}
          // orientation="vertical"
        />
      </Stack>
    </Box>
  );
}

export default Volume;
