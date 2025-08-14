import { colors } from './utils';

import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Curios from './pages/Curios';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: colors.light, color: colors.dark}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/curios" element={<Curios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
