import React from 'react';
import { Badge, IconButton, Menu } from '@mui/material';
import { PlaylistPlay } from '@mui/icons-material';
import usePlaylistListing from '../../../../hooks/media/usePlaylistListing';
import Asynchronous from './Async';

export default function Playlists() {
  const { playlistCount } = usePlaylistListing();

  const [playlistDisabled, setPlaylistDisabled] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <>
      <IconButton
        aria-label="playlists"
        color="inherit"
        size="large"
        disabled={playlistDisabled}
        onClick={handleOpenUserMenu}
        children={<Badge badgeContent={playlistCount} children={<PlaylistPlay />} />}
      />
      <Menu
        id="menu-appbar"
        sx={{ position: 'absolute', top: '-3em' }}
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        keepMounted
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Asynchronous />
      </Menu>
    </>
  );
}
