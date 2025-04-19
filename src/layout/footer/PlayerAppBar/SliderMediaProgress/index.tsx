import { CustomSlider, TinyTextLeft, TinyTextRigth } from './styles';

interface SliderMediaProgressProps {
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
  position,
  duration,
  handleChangeSliderPosition,
}: SliderMediaProgressProps) => (
  <>
    <TinyTextLeft>{getTime(position)}</TinyTextLeft>
    <CustomSlider
      aria-label="Media slider"
      value={position}
      onChange={handleChangeSliderPosition}
      step={1} // Precisão de controle no slider (0 a 1)
      min={0}
      max={duration}
      valueLabelDisplay="auto" // Exibe o valor no slider durante a interação
      valueLabelFormat={getTime} // Formata o valor usando a função getTime
    />
    <TinyTextRigth>{duration ? '-' + getTime(duration - position) : '0:00'}</TinyTextRigth>
  </>
);

export default SliderMediaProgress;
