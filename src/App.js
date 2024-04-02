import { useState } from 'react';

import { Menu } from './components/Menu/Menu';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './pages/About/About';
import { Projects } from './pages/Projects/Projects';
import { Contacts } from './pages/Contacts/Contacts';
import { Outlet } from 'react-router-dom';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="body">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      { isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
      <div className="mobile__content">
        <Outlet />
      </div>
      <div className="desktop__content">
      <About />
      <Projects />
      <Contacts />
      </div>
      <Footer />
    </div>
  );
}
