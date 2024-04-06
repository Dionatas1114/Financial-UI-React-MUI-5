import * as React from 'react';
import * as MUI from '@mui/material';
import * as IconsMUI from '@mui/icons-material';
import Playlists from './Playlists';

interface PlayerToolsProps {
  menuId: string;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export type { PlayerToolsProps };

export default function PlayerTools(params: PlayerToolsProps) {
  const { menuId, handleProfileMenuOpen } = params;

  return (
    <MUI.Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Playlists />
      <MUI.IconButton
        aria-label="Close Fullscreen"
        color="inherit"
        size="large"
        disabled
        children={<IconsMUI.CloseFullscreen />}
      />
      <MUI.IconButton
        size="large"
        aria-label="Settings"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        children={<IconsMUI.Settings />}
      />
      <MUI.IconButton
        aria-label="Download"
        color="inherit"
        size="large"
        disabled
        children={<IconsMUI.Download />}
      />
    </MUI.Box>
  );
}
