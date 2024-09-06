import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import '../styles/core/index.css'
import Navbar from './Navbar';
import Projects from '../pages/Projects';
import TinTin60CAT from '../pages/projects/TinTin60Cat';
import HospitalViladecans from '../pages/projects/HospitalViladecans';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/titin60cat-vr-experience" element={<TinTin60CAT />} />
        <Route path="/projects/hospital-viladecans-vr-experience" element={<HospitalViladecans />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
