import { Nav } from './nav';
import Main from './pages/Main';
import NavProvider from './context/NavContext';

function App() {
  return (
    <NavProvider>
      <Nav />
      <Main />
    </NavProvider>
  );
}

export default App;
