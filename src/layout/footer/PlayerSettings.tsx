import * as MUI from '@mui/material';
import * as IconsMUI from '@mui/icons-material';

interface PlayerSettingsProps {
  mobileMenuId: string;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export type { PlayerSettingsProps };

function PlayerSettings({ mobileMenuId, handleMobileMenuOpen }: PlayerSettingsProps) {
  return (
    <MUI.Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <MUI.IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
        children={<IconsMUI.Settings />}
      />
    </MUI.Box>
  );
}

export default PlayerSettings;
