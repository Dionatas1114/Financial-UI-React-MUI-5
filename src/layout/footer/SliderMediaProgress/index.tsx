import { Box, Typography } from '@mui/material';
import { CustomSlider, TinyTextLeft, TinyTextRigth } from './styles';

interface SliderMediaProgressProps {
  songTitle: string;
  position: number;
  duration: number;
  handleChangeSliderPosition: (_: Event, volume: number | number[]) => void;
}

export type { SliderMediaProgressProps };

const getTime = (time: number) => {
  const minute = Math.floor(time / 60);
  const secondLeft = ('0' + Math.floor(time % 60)).slice(-2);
  return `${minute}:${secondLeft}`;
};

const SliderMediaProgress = ({
  songTitle,
  position,
  duration,
  handleChangeSliderPosition,
}: SliderMediaProgressProps) => (
  <Box
    sx={{
      width: '100%',
      marginRight: '1em',
      display: 'flex',
    }}
  >
    <Typography
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
      onChange={handleChangeSliderPosition}
      step={1} // Precisão de controle no slider (0 a 1)
      min={0}
      max={duration}
    />
    <TinyTextRigth>{duration ? '-' + getTime(duration - position) : '0:00'}</TinyTextRigth>
  </Box>
);

export default SliderMediaProgress;
