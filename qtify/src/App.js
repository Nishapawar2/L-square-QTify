import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
   <>
    <StyledEngineProvider injectFirst>
      <Navbar/>
    </StyledEngineProvider>

   </>
  );
}

export default App;
