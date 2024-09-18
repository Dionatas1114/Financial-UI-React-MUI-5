import React from 'react';
import ReactPlayer from 'react-player';
import { Box, AppBar, Toolbar } from '@mui/material';

import Audio, { SongInfoProps } from '../../components/audio';
// import { songsList } from 'components/audio/data';
import useAudioPlayer from '../../hooks/media/useAudioPlayer';

import Volume from './Volume';
import MenuBar from './Settings';
import PlayerLogo from './PlayerLogo';
import PlayerTools from './PlayerTools';
import PlayerControl from './PlayerControl';
import SliderProgress from './SliderProgress';
import PlayerSettings from './PlayerSettings';

export default function PlayerAppBar() {
  const menuId = 'player-menu';
  const mobileMenuId = 'player-menu-mobile';
  const songMuted = 0;
  const volumeSongActived = true;
  const songInitialState = {
    currentTime: 0,
    duration: 0,
    animationPercent: 0,
    volume: 50,
  };
  const url = 'https://www.youtube.com/watch?v=luOEoasGUK0';

  const { audioUrl, isPlaying, songTitle, handlePlaySong } = useAudioPlayer(url);
  const playerRef = React.useRef<ReactPlayer>(null);

  const [position, setPosition] = React.useState<number>(0);
  const [volume, setVolume] = React.useState<number>(songInitialState.volume);
  const [isActiveVolume, setIsActiveVolume] = React.useState<boolean>(volumeSongActived);

  const [songInfo, setSongInfo] = React.useState<SongInfoProps>(songInitialState);
  // const [songs, setSongs] = React.useState(songsList());
  // const [currentSong, setCurrentSong] = React.useState(songs[0]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setMobileMoreAnchorEl(event.currentTarget);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleActiveVolume = () => {
    setIsActiveVolume(!isActiveVolume);
  };

  const handleChangeSliderPosition = (_: Event, newValue: number | number[]) => {
    setSongInfo({ ...songInfo, currentTime: newValue as number });
    const _position = Array.isArray(newValue) ? newValue[0] : newValue;
    setPosition(_position);
    playerRef.current?.seekTo(_position); // Atualiza a posição da mídia
  };

  const playerControlProps = { handlePlaySong, isPlaying };
  const playerToolsProps = { menuId, handleProfileMenuOpen };
  const playerSettingsProps = { mobileMenuId, handleMobileMenuOpen };
  const audioProps = {
    audioUrl,
    playerRef,
    isPlaying,
    volume: isActiveVolume ? volume / 100 : songMuted,
    songInfo,
    setSongInfo,
  };
  const volumeProps = {
    handleActiveVolume,
    isActiveVolume,
    volume,
    setVolume,
  };
  const menuBarProps = {
    menuId,
    mobileMenuId,
    anchorEl,
    isMenuOpen,
    handleMenuClose,
    mobileMoreAnchorEl,
    isMobileMenuOpen,
    handleMobileMenuClose,
    handleProfileMenuOpen,
  };
  const sliderPositionProps = {
    songTitle,
    position: songInfo.currentTime,
    duration: songInfo.duration,
    handleChangeSliderPosition,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <PlayerLogo />
          <PlayerControl {...playerControlProps} />
          <SliderProgress {...sliderPositionProps} />
          <Volume {...volumeProps} />
          <Box sx={{ flexGrow: 1 }} /> {/* DIVIDER */}
          <PlayerTools {...playerToolsProps} /> //* Playlists, CloseFullscreen, Settings, Download
          <PlayerSettings {...playerSettingsProps} />
          <Audio {...audioProps} />
          <MenuBar {...menuBarProps} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
