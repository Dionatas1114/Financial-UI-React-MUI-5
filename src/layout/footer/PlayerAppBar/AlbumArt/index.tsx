import { Box, CardMedia } from '@mui/material';

const AlbumArt = ({ image }: { image: string }) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <CardMedia
        component="img"
        sx={{ width: 40, height: 40, borderRadius: '10%' }}
        image={image}
        alt="album image"
      />
    </Box>
  );
};

export default AlbumArt;
