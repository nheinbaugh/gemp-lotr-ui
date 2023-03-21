import '@fontsource/public-sans';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

import Landing from './pages/Landing/Landing';
import themeOverrides from './types/ThemeCustomizations';

function App() {
  return (
    <CssVarsProvider theme={themeOverrides}>
      <CssBaseline />
      <Landing />
    </CssVarsProvider>
  );
}

export default App;
