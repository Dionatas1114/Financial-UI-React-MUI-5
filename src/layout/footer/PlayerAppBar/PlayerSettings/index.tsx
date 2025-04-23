import React from 'react';
import { Menu, MenuItem } from '@mui/material';

type CommonMenuProps = {
  menuId: string;
  anchorEl: HTMLElement | null;
};

type MenuProps = CommonMenuProps & {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLLIElement> | undefined;
};

type MenuBarProps = CommonMenuProps & {
  mobileMenuId: string;
  mobileMoreAnchorEl: HTMLElement | null;
  isMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  handleMenuClose: React.MouseEventHandler<HTMLLIElement> | undefined;
  handleMobileMenuClose: React.MouseEventHandler<HTMLLIElement> | undefined;
};

const CommonMenu = ({ menuId, anchorEl, open, onClose }: MenuProps) => (
  <Menu
    id={menuId}
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    keepMounted
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    sx={{ m: '-50px 20px 0 0' }}
  >
    <MenuItem onClick={onClose}>Profile</MenuItem>
    <MenuItem onClick={onClose}>My account</MenuItem>
  </Menu>
);

export default function MenuBar({
  menuId,
  mobileMenuId,
  anchorEl,
  isMenuOpen,
  handleMenuClose,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
}: MenuBarProps) {
  return (
    <>
      <CommonMenu menuId={menuId} anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose} />
      <CommonMenu
        menuId={mobileMenuId}
        anchorEl={mobileMoreAnchorEl}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      />
    </>
  );
}
