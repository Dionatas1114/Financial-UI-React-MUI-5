import * as React from 'react';
import * as MUI from '@mui/material';

import Volume from './Volume';
import MenuBar from './MenuBar';
import PlayerLogo from './PlayerLogo';
import PlayerTools from './PlayerTools';
import PlayerControl from './PlayerControl';
import SliderProgress from './SliderProgress';
import PlayerSettings from './PlayerSettings';

import Audio from 'components/audio';
// import { songsList } from 'components/audio/data';
import UseMedias from 'hooks/media';

export default function PlayerAppBar() {
  const url = 'https://www.youtube.com/watch?v=luOEoasGUK0';
  const songMuted = 0;
  const volumeSongActived = true;
  const songInitialState = {
    currentTime: 0,
    duration: 0,
    animationPercent: 0,
    volume: 50,
  };

  const { audioUrl, isPlaying, songTitle, playSongHandler } = UseMedias(url);

  const audioRef = React.createRef<HTMLAudioElement>();
  // const [songs, setSongs] = React.useState(songsList());
  // const [currentSong, setCurrentSong] = React.useState(songs[0]);
  const [songInfo, setSongInfo] = React.useState(songInitialState);
  const [isActiveVolume, setIsActiveVolume] = React.useState<boolean>(volumeSongActived);

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
    // if (audioRef.current) {
    // audioRef.current.volume = isActiveVolume ? songMuted : songInitialState.volume / 100;
    // setSongInfo({ ...songInfo, volume: isActiveVolume ? songMuted : songInitialState.volume });
    setIsActiveVolume(!isActiveVolume);
    // } else {
    //   console.error('Error with mute button');
    // }
  };

  const handleSetVolume = (_: Event, volume: number | number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = (volume as number) / 100;
      setSongInfo({ ...songInfo, volume: volume as number });
    } else {
      console.error('Error with volume button');
    }
  };

  const handleChangeSliderPosition = (_: Event, position: number | number[]) => {
    if (audioRef.current) {
      console.log('🚀 ~ handleChangeSliderPosition ~ position:', position as number);
      audioRef.current.currentTime = position as number;
      setSongInfo({ ...songInfo, currentTime: position as number });
    } else {
      console.error('Error with song position button');
    }
  };

  const nextSongHandler = () => console.log('next music');

  const timeUpdateHandler = ({ currentTarget: e }: React.SyntheticEvent<HTMLAudioElement>) => {
    const animationPercent = Math.round((Math.round(e.currentTime) / Math.round(e.duration)) * 100);

    setSongInfo({
      currentTime: e.currentTime,
      duration: e.duration,
      volume: songInfo.volume,
      animationPercent,
    });
  };

  const menuId = 'player-menu';
  const mobileMenuId = 'player-menu-mobile';

  const playerControlProps = { playSongHandler, nextSongHandler, isPlaying };
  const playerToolsProps = { menuId, handleProfileMenuOpen };
  const playerSettingsProps = { mobileMenuId, handleMobileMenuOpen };
  const audioProps = {
    audioUrl,
    isPlaying,
    volume: isActiveVolume ? songInitialState.volume / 100 : songMuted,
  };
  const volumeProps = {
    handleActiveVolume,
    isActiveVolume,
    volume: songInfo.volume,
    handleSetVolume,
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
    <MUI.Box sx={{ flexGrow: 1 }}>
      <MUI.AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <MUI.Toolbar>
          <PlayerLogo />
          <PlayerControl {...playerControlProps} />
          <SliderProgress {...sliderPositionProps} />
          <Volume {...volumeProps} />
          <MUI.Box sx={{ flexGrow: 1 }} /> {/* DIVIDER */}
          <PlayerTools {...playerToolsProps} />
          <PlayerSettings {...playerSettingsProps} />
          <Audio {...audioProps} />
        </MUI.Toolbar>
      </MUI.AppBar>
      <MenuBar {...menuBarProps} />
    </MUI.Box>
  );
}
