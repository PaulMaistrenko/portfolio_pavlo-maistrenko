import { NavLink } from "react-router-dom";
import { CrossButton } from "../CrossButton";
import { MenuButton } from "../MenuButton";

export const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="header">
      <div className="container">
      <div className="header__mobile">
          {isMenuOpen
            ? <CrossButton setIsMenuOpen={setIsMenuOpen} />
            : <MenuButton setIsMenuOpen={setIsMenuOpen} />
          }
        </div>
        <nav className="header__desktop">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/about" className="nav__link">about.</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/projects" className="nav__link">projects.</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contacts" className="nav__link">contacts.</NavLink>
            </li>
          </ul>
          <NavLink
            to="https://drive.google.com/file/d/1gn8pSq_oSFfB7OU71VvLzV25nurwP1qr/view?usp=drive_link"
            className="nav__link nav__link--button"
            target='_blank'
            rel="noreferrer"
          >
            Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
