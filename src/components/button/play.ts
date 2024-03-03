import * as React from 'react';
import { BooleanProps } from './Library';

export const playAudio = ({ isPlaying, audioRef }: BooleanProps) => {
  console.log("🚀 ~ playAudio ~ isPlaying:", isPlaying)
  // if (isPlaying) {
  //   const playPromise = audioRef?.current.play();
  //   if (playPromise !== undefined) {
  //     playPromise.then(() => audioRef?.current.play()).catch((error: any) => console.log(error));
  //   }
  // }
};
