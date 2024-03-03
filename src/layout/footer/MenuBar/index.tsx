import * as React from 'react';
import * as MUI from '@mui/material';
import * as IconsMUI from '@mui/icons-material';

interface MenuBarProps {
  menuId: string;
  mobileMenuId: string;
  anchorEl: any;
  mobileMoreAnchorEl: any;
  isMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  handleMenuClose: React.MouseEventHandler<HTMLLIElement> | undefined;
  handleMobileMenuClose: React.MouseEventHandler<HTMLLIElement> | undefined;
  handleProfileMenuOpen: React.MouseEventHandler<HTMLLIElement> | undefined;
}

export default function MenuBar({
  menuId,
  mobileMenuId,
  anchorEl,
  isMenuOpen,
  handleMenuClose,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}: MenuBarProps) {
  const renderMenu = (
    <MUI.Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MUI.MenuItem onClick={handleMenuClose}>Profile</MUI.MenuItem>
      <MUI.MenuItem onClick={handleMenuClose}>My account</MUI.MenuItem>
    </MUI.Menu>
  );

  const renderMobileMenu = (
    <MUI.Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MUI.MenuItem>
        <MUI.IconButton size="large" aria-label="playlists" color="inherit">
          <MUI.Badge badgeContent={17} color="error">
            <IconsMUI.PlaylistPlay />
          </MUI.Badge>
        </MUI.IconButton>
        <p>Playlist</p>
      </MUI.MenuItem>
      <MUI.MenuItem onClick={handleProfileMenuOpen}>
        <MUI.IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="player-menu"
          aria-haspopup="true"
          color="inherit"
          children={<IconsMUI.Settings />}
        />
        <p>Profile</p>
      </MUI.MenuItem>
    </MUI.Menu>
  );

  return (
    <>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
