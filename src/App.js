import { useState } from 'react';

import { CrossButton } from './components/CrossButton';
import { MenuButton } from './components/MenuButton';
import { Menu } from './components/Menu/Menu';
import './App.scss';
import { NavLink } from 'react-router-dom';
import { Footer } from './components/Footer';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="body">
      <header className="header">
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
        </nav>
    </header>
    { isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
    <section className="home container">
      <h1 className="section__title">I'M <br /> Pavlo Maistrenko</h1>
      <h2 className="section__subtitle dark-text">Frontend Developer</h2>
      <p className="green-text">with passion to creating and improving...</p>
    </section>
    <div className="desktop__content">
      <section className="about">
        <div className="about__photo"></div>
        <article className="about__content">
          <p className="accented-text">Hi, my name is</p>
          <p className="title-text">Pavlo Maistrenko</p>
          <p className="about-text">
            I have spent a significant portion of my career
            collaborating with foreign companies in the field
            of trade. Confronted with new technological solutions
            every day, I became increasingly fascinated by the
            development in the field of information technology.
            Acquiring essential skills in determination,
            resilience, and perseverance, coupled with my
            inclination to explore new facets of our daily lives
            and my love for exact sciences, in 2021, I decided to
            embark on the journey of learning web development.
          </p>
          <p className="about-text">
            The decisive factor in choosing these technologies
            was the broad range of possibilities and prospects
            that open up for a developer when utilizing technologies
            such as:
          </p>
          <div className="skills">
            <span className="accented-text">JavaScript <br /> HTML<br /> CSS<br /> React<br /> TypeScript<br /></span>
          </div>
          <p className="about-text">
            Furthermore, the ability to immediately witness the
            results of my work and the opportunity to apply a
            certain level of creativity played a pivotal role.
            This is how I began my path as a Frontend developer.
            During my free time, away from studying and work, I
            enjoy traveling and discovering new places.
          </p>
        </article>
      </section>
      <section className="projects">Projects</section>
      <section className="contacts">
        <ul className="contacts__list">
          <li className="contacts__item">
          Phone
          <a
            href="tel:+4916096294939"
            className="contacts__link"
          >
            +49(160)96294939
          </a>
        </li>
        <li className="contacts__item">
          Telegram
          <a
            href="https://t.me/Paul_Master"
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            @Paul_Master
          </a>
        </li>
        <li className="contacts__item">
          Email
          <a
            href="mailto:maystrenko.p@gmail.com"
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            maystrenko.p@gmail.com
          </a>
        </li>
          <li className="contacts__item">
            Location
            <a
              href="https://maps.app.goo.gl/Utq9XvnWovzEfu1K8"
              className="contacts__link"
              target="_blank"
              rel="noreferrer"
            >
              45659, Recklinghausen, Germany
            </a>
          </li>
        </ul>
        <iframe
          title='contacts-map'
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66662.11461406482!2d7.185071656949898!3d51.61687706398954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e36a5818ae93%3A0xeef88f4e39d28988!2sHohenzollernstra%C3%9Fe%2C%2045659%20Recklinghausen!5e0!3m2!1sru!2sde!4v1683117501232!5m2!1sru!2sde"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
    <Footer />
    </div>
  );
}
