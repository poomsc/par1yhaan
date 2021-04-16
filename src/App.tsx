import './App.css';
import React, { useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { auth } from 'services/firebase';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStore';
import AlertModal from 'components/Modal/AlertModal';
import Routes from 'routes/index';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F1A104',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#DECBA4',
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
  }, [setUser]);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <AlertModal />
    </ThemeProvider>
  );
});

export default App;
