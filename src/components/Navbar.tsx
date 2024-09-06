import { Link } from 'react-router-dom';
import Logo from '../assets/logos/nerivalabs-logo.png';
import '../styles/common/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Proyectos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;