import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Career from './components/Career';

function App() {
  return (
    <div className="main">
      <header >
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="career" element={<Career />} />
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
