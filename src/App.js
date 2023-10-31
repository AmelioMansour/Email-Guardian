import './index.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import HowItWorks from './components/how';
import Results from './components/results';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-secondary text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how" element={<HowItWorks />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
