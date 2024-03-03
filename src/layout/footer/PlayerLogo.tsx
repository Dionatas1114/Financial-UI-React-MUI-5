import * as MUI from '@mui/material';

export default function PlayerLogo() {
  return (
    <MUI.Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <MUI.Typography
        aria-label="player logo"
        variant="h6"
        noWrap
        component="div"
        sx={{ marginX: '1em' }}
        children={'PLAYER'}
      />
    </MUI.Box>
  );
}
