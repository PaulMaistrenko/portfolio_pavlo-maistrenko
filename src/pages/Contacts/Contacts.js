import { NavLink } from "react-router-dom";

export const Contacts = () => {
  return (
    <section className="contacts container" id="contacts">
        <h1 className="section__title">My contacts</h1>
        <div className="contacts__content">
          <ul className="contacts__list">
          <li className="contacts__item">
          Phone
          <NavLink
            to="tel:+4916096294939"
            className="contacts__link"
          >
            +49(160)96294939
          </NavLink>
        </li>
        <li className="contacts__item">
          Telegram
          <NavLink
            to="https://t.me/Paul_Master"
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            @Paul_Master
          </NavLink>
        </li>
        <li className="contacts__item">
          Email
          <NavLink
            to="mailto:maystrenko.p@gmail.com"
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            maystrenko.p@gmail.com
          </NavLink>
        </li>
          <li className="contacts__item">
            Location
            <NavLink
              to="https://maps.app.goo.gl/Utq9XvnWovzEfu1K8"
              className="contacts__link"
              target="_blank"
              rel="noreferrer"
            >
              45659, Recklinghausen, Germany
            </NavLink>
          </li>
          </ul>
          <iframe
            title='contacts-map'
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66662.11461406482!2d7.185071656949898!3d51.61687706398954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e36a5818ae93%3A0xeef88f4e39d28988!2sHohenzollernstra%C3%9Fe%2C%2045659%20Recklinghausen!5e0!3m2!1sru!2sde!4v1683117501232!5m2!1sru!2sde"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
    </section>
  );
}
