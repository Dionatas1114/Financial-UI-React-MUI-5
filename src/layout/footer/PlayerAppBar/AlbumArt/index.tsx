import { CardMedia } from '@mui/material';

const AlbumArt = ({ image }: { image: string }) => {
  return (
    <CardMedia
      component="img"
      sx={{ width: 40, height: 40, borderRadius: '10%' }}
      image={image}
      alt="album image"
    />
  );
};

export default AlbumArt;
