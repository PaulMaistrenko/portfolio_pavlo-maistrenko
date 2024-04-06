import { NavLink } from 'react-router-dom';
import './menu.scss';
import { Footer } from '../Footer';
import { scrollToTop } from '../../services/scrollToTop';

export const Menu = ({ setIsMenuOpen }) => {
  const handleMenuState = () => {
    setIsMenuOpen(false);
    scrollToTop();
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
            Contacts
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="https://drive.google.com/file/d/1gn8pSq_oSFfB7OU71VvLzV25nurwP1qr/view?usp=drive_link"
            className="nav__link nav__link--button"
            target='_blank'
            rel="noreferrer"
          >
            Resume
          </NavLink>
        </li>
      </ul>
      <Footer />
    </div>
  );
}