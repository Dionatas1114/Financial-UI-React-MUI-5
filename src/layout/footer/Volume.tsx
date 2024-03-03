import * as MUI from '@mui/material';
import * as IconsMUI from '@mui/icons-material';
import { CustomSlider } from './styles';

interface VolumeProps {
  volume: number | number[];
  isActiveVolume: boolean;
  handleActiveVolume: (event: React.MouseEvent<HTMLElement>) => void;
  handleSetVolume: any;
}

export type { VolumeProps };

function Volume({ handleActiveVolume, isActiveVolume, volume, handleSetVolume }: VolumeProps) {
  return (
    <MUI.Box sx={{ width: 200, mr: 1, display: { sm: 'block' } }}>
      <MUI.Stack spacing={2} direction="row" alignItems="center">
        <MUI.IconButton
          aria-label="Volume Icon"
          size="large"
          color="inherit"
          onClick={handleActiveVolume}
        >
          {!isActiveVolume ? <IconsMUI.VolumeOff /> : <IconsMUI.VolumeUp />}
        </MUI.IconButton>
        <CustomSlider
          aria-label="Volume Slider"
          // disabled={!isActiveVolume}
          // value={volume}
          // max={100}
          // min={0}
          // onChange={handleSetVolume}
          valueLabelDisplay="auto"
          sx={{ display: 'flex', alignItems: 'center' }}
          // orientation="vertical"
        />
      </MUI.Stack>
    </MUI.Box>
  );
}

export default Volume;
