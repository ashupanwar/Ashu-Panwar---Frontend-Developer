
import './App.css';
import LandingPage from './pages/LandingPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#d40202',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPage/>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
