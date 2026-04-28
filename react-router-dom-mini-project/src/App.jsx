import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import { Home } from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import { Cards } from './pages/Cards';

function App() {
  return (
    <>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App;