import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline } from '@mui/material';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </StrictMode>
);
