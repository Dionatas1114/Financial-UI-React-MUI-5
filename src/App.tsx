import { BrowserRouter as Router } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { CssBaseline } from '@mui/material';

// import { AppThemeProvider } from 'context/Color';
// import AppRoutes from 'routes';

const App = () => {
  return (
    // <AppThemeProvider>
    <Router>
      {/* <ToastContainer autoClose={2000} /> */}
      <CssBaseline enableColorScheme />
      {'Financial-UI'}
      {/* <AppRoutes /> */}
    </Router>
    // </AppThemeProvider>
  );
};

export default App;
