import { NavLink } from 'react-router-dom';
import './menu.scss';
import { Footer } from '../Footer';

export const Menu = ({ setIsMenuOpen }) => {
  const handleMenuState = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className='menu__page'>
      <ul className="mobile__nav-list">
        <li className="nav__item">
          <NavLink
            to="/about"
            className="nav__link"
            onClick={handleMenuState}
          >
            About
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/projects"
            className="nav__link"
            onClick={handleMenuState}
          >
            Projects
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contacts"
            className="nav__link"
            onClick={handleMenuState}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/" className="nav__link"
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <a
            href="https://drive.google.com/file/d/1bsD9vzK7F3IhTOrUMJVXGg6iu8cTysyP/view?usp=drive_link"
            className="nav__link nav__link--button"
            target='_blank'
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      <Footer />
    </div>
  );
}