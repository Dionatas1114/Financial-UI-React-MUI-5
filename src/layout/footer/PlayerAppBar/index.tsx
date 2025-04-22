import React from 'react';
import { Box, AppBar, Toolbar, CardMedia } from '@mui/material';

import ReactPlayer from 'react-player';

import Audio, { SongInfoProps } from '../../../components/audio';
import { useJamendoPlayer } from '../../../context/JamendoPlayerContext';

import AlbumArt from './AlbumArt';
// import DialogSelect from './DialogSelect';
import MediaTitle from './MediaTitle';
import PlayerControl from './PlayerControl';
import PlayerLogo from './PlayerLogo';
import MenuBar from './PlayerSettings';
import PlayerSettings from './PlayerSettings/PlayerSettings';
import PlayerTools from './PlayerTools';
import SliderMediaProgress from './SliderMediaProgress';
import Volume from './Volume';

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

  const playerRef = React.useRef<ReactPlayer>(null);
  const { isPlaying, handlePlaySong, actualSong, nextSongHandler, setIsPlaying } =
    useJamendoPlayer();

  const [volume, setVolume] = React.useState<number>(songInitialState.volume);
  const [isActiveVolume, setIsActiveVolume] = React.useState<boolean>(volumeSongActived);
  const [songInfo, setSongInfo] = React.useState<SongInfoProps>(songInitialState);

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
    const position = Array.isArray(newValue) ? newValue[0] : newValue;
    playerRef.current?.seekTo(position);
  };

  const playerControlProps = { handlePlaySong, isPlaying, nextSongHandler };
  const playerToolsProps = { menuId, handleProfileMenuOpen };
  const playerSettingsProps = { mobileMenuId, handleMobileMenuOpen };
  const audioProps = {
    audioUrl: actualSong?.audio,
    playerRef,
    isPlaying,
    volume: isActiveVolume ? volume / 100 : songMuted,
    songInfo,
    setSongInfo,
    nextSongHandler,
    setIsPlaying,
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
  const mediaTitleProps = {
    isPlaying,
    songTitle: `${actualSong?.name} - ${actualSong?.artist_name}`,
  };
  const sliderPositionProps = {
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
          <MediaTitle {...mediaTitleProps} />
          <AlbumArt image={actualSong?.image} />
          <SliderMediaProgress {...sliderPositionProps} />
          {/* DIVIDER */}
          {/* <Box sx={{ flexGrow: 1 }} />  */}
          {/* <DialogSelect /> */}
          <Volume {...volumeProps} />
          {/* Playlists, CloseFullscreen, Settings, Download */}
          <PlayerTools {...playerToolsProps} />
          <PlayerSettings {...playerSettingsProps} />
          <Audio {...audioProps} />
          <MenuBar {...menuBarProps} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
