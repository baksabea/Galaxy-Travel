import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Training from './pages/Training';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
