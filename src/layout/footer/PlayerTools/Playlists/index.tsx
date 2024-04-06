import * as React from 'react';
import * as MUI from '@mui/material';
import * as IconsMUI from '@mui/icons-material';
import usePlaylistListing from 'hooks/media/usePlaylistListing';
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
      <MUI.IconButton
        aria-label="playlists"
        color="inherit"
        size="large"
        disabled={playlistDisabled}
        onClick={handleOpenUserMenu}
        children={<MUI.Badge badgeContent={playlistCount} children={<IconsMUI.PlaylistPlay />} />}
      />
      <MUI.Menu
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
      </MUI.Menu>
    </>
  );
}
