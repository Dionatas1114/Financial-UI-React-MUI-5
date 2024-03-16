import * as MUI from '@mui/material';
import { CustomSlider, TinyTextLeft, TinyTextRigth } from './styles';

interface SliderProgressProps {
  songTitle: string;
  position: number;
  duration: number;
  handleChangeSliderPosition: (_: Event, volume: number | number[]) => void;
}

export type { SliderProgressProps };

const getTime = (time: number) => {
  const minute = Math.floor(time / 60);
  const secondLeft = ('0' + Math.floor(time % 60)).slice(-2);
  return `${minute}:${secondLeft}`;
};

const SliderProgress = ({
  songTitle,
  position,
  duration,
  handleChangeSliderPosition,
}: SliderProgressProps) => (
  <MUI.Box
    sx={{
      width: '100%',
      marginRight: '1em',
      display: 'flex',
    }}
  >
    <MUI.Typography
      aria-label="Media Title"
      noWrap
      letterSpacing={-0.25}
      sx={(theme) => ({ margin: theme.spacing(1, 3, 0, 1) })}
      children={songTitle}
    />
    <TinyTextLeft>{getTime(position)}</TinyTextLeft>
    <CustomSlider
      aria-label="Media slider"
      value={position}
      min={0}
      step={1}
      max={duration}
      onChange={handleChangeSliderPosition}
    />
    <TinyTextRigth>{duration ? '-' + getTime(duration - position) : '0:00'}</TinyTextRigth>
  </MUI.Box>
);

export default SliderProgress;
