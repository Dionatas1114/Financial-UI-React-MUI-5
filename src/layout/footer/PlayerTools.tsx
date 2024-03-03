import * as MUI from '@mui/material';
import * as IconsMUI from '@mui/icons-material';

interface PlayerToolsProps {
  menuId: string;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export type { PlayerToolsProps };

const PlayerTools = ({ menuId, handleProfileMenuOpen }: PlayerToolsProps) => (
  <MUI.Box sx={{ display: { xs: 'none', md: 'flex' } }}>
    <MUI.IconButton
      aria-label="playlists"
      color="inherit"
      size="large"
      disabled
      children={<MUI.Badge badgeContent={3} children={<IconsMUI.PlaylistPlay />} />}
    />
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

export default PlayerTools;
