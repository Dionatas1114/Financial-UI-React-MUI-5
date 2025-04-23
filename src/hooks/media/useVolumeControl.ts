import React, { useState, useRef } from 'react';

const volumeSongActived = true;

export const useVolumeControl = () => {
  const [volume, setVolume] = React.useState<number>(50);
  const [isActiveVolume, setIsActiveVolume] = React.useState<boolean>(volumeSongActived);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showSlider, setShowSlider] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnchorEl(event.currentTarget);
    setShowSlider(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowSlider(false), 500); // 500ms delay pra sumir
  };

  const handleActiveVolume = () => setIsActiveVolume((prev) => !prev);

  const handleSetVolume = (_: Event, volume: number | number[]) => {
    if (isActiveVolume) {
      setVolume(volume as number);
    } else {
      console.error('Error with volume button');
    }
  };

  return {
    volume,
    isActiveVolume,
    anchorEl,
    showSlider,
    handleSetVolume,
    handleActiveVolume,
    handleMouseEnter,
    handleMouseLeave,
  };
};
