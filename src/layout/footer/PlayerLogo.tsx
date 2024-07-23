import { Box, Typography } from '@mui/material';

export default function PlayerLogo() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Typography
        aria-label="player logo"
        variant="h6"
        noWrap
        component="div"
        sx={{ marginX: '1em' }}
        children={'PLAYER'}
      />
    </Box>
  );
}
