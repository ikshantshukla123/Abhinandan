import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import SpecialDishes from './components/SpecialDishes';
import Contact from './components/Contact';
import WhyUs from './components/WhyUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/special-dishes" element={<SpecialDishes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-us" element={<WhyUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
