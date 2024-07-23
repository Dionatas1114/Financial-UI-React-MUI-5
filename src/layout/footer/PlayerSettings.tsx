import { Box, IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';

interface PlayerSettingsProps {
  mobileMenuId: string;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export type { PlayerSettingsProps };

function PlayerSettings({ mobileMenuId, handleMobileMenuOpen }: PlayerSettingsProps) {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
        children={<Settings />}
      />
    </Box>
  );
}

export default PlayerSettings;
