import React from 'react';
import { Menu, MenuItem, IconButton, Badge } from '@mui/material';
import { Settings, PlaylistPlay } from '@mui/icons-material';

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
    <Menu
      id={menuId}
      keepMounted
      onClose={handleMenuClose}
      open={isMenuOpen}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
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
      <MenuItem>
        <IconButton size="large" aria-label="playlists" color="inherit">
          <Badge badgeContent={17} color="error">
            <PlaylistPlay />
          </Badge>
        </IconButton>
        <p>Playlist</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="player-menu"
          aria-haspopup="true"
          color="inherit"
          children={<Settings />}
        />
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
