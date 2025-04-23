import React from 'react';
import { Box, IconButton } from '@mui/material';
import { CloseFullscreen, Download, Settings } from '@mui/icons-material';
// import Playlists from './Playlists';

interface PlayerToolsProps {
  menuId: string;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export type { PlayerToolsProps };

export default function PlayerTools(props: PlayerToolsProps) {
  const { menuId, handleProfileMenuOpen } = props;

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      {/* <Playlists /> */}
      <IconButton
        size="large"
        aria-label="Settings"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        children={<Settings />}
      />
      <IconButton
        aria-label="Download"
        color="inherit"
        size="large"
        disabled
        children={<Download />}
      />
      <IconButton
        aria-label="Close Fullscreen"
        color="inherit"
        size="large"
        disabled
        children={<CloseFullscreen />}
      />
    </Box>
  );
}
