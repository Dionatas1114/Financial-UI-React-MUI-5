import { Box, Tooltip, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

interface MediaTitleProps {
  isPlaying: boolean;
  songTitle: string;
}

export type { MediaTitleProps };

const scroll = keyframes`
  0% {
    transform: translateX(15%);
  }
  100% {
    transform: translateX(-70%);
  }
`;

const MediaTitle = ({ isPlaying, songTitle }: MediaTitleProps) => (
  <Tooltip title={songTitle} placement="top">
    <Box
      sx={(theme) => ({
        margin: theme.spacing(1, 3, 0, 1),
        overflow: 'hidden', // Esconde a parte do texto que transborda
        whiteSpace: 'nowrap', // Mantém o texto em uma linha
        width: '300px', // Define o tamanho da área visível
      })}
    >
      <Typography
        aria-label="Media Title"
        letterSpacing={-0.25}
        sx={{
          display: 'inline-block',
          animation: `${scroll} 8s linear infinite`, // Define a animação
          animationPlayState: isPlaying ? 'running' : 'paused', // Controla se a animação está pausada ou rodando
        }}
        children={songTitle}
      />
    </Box>
  </Tooltip>
);

export default MediaTitle;
