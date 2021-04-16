import './App.css';
import React, { useEffect } from 'react';
import Routes from 'routes/index';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { auth } from 'services/firebase';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStore';
import AlertModal from 'components/Modal/AlertModal';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#3caea3',
      main: '#20639b',
      dark: '#173f5f',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#f4f4f4',
      dark: '#DFDFDF',
      contrastText: '#000',
    },
  },
});

const App = observer(() => {
  const {
    userStore: { setUser },
  } = useStores();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return unsubscribe;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <AlertModal />
    </ThemeProvider>
  );
});

export default App;
