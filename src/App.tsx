import './App.css';
import Routes from 'routes/index';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
