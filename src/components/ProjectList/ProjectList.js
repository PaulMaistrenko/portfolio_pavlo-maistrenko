import './project-list.scss';

import  DIA_landing from '../../images/blocks/projects/DIA_landing.png';
import  MET_landing from '../../images/blocks/projects/MET_landing.png';
import  Museum_landing from '../../images/blocks/projects/Museum_landing.png';
import  Miami_landing from '../../images/blocks/projects/Miami_landing.png';
import  catalog from '../../images/blocks/projects/gadgets_catalog.bmp';
import  todo_app from '../../images/blocks/projects/todo.png';
import  game from '../../images/blocks/projects/2048_game_.png';
import { Link } from 'react-router-dom';

export const ProjectList = () => {
  return (
    <ul className="project__list">
      <li className="project__card">
        <div className="project__info">
          <div className="project__top">
            <h3 className="project__title">Strategic Agency</h3>
            <div className="links">
            <Link
              to="https://paulmaistrenko.github.io/layout_dia/"
              className="project__link demo__link icon"
              target='_blank'
            />
            <Link
              to="https://github.com/PaulMaistrenko/layout_dia"
              className="project__link code__link icon"
              target='_blank'
            />
            </div>
          </div>
          <p className="project__description">The pixel-perfect responsive landing page.</p>
          <div className="project__technologies">
            <p className="technologies__item">JavaScript</p>
            <p className="technologies__item">React</p>
            <p className="technologies__item">TypeScript</p>
            <p className="technologies__item">HTML</p>
            <p className="technologies__item">SCSS</p>
          </div>
        </div>
        <img
          src={DIA_landing}
          alt="Strategic Agency"
          className="card__img"
        />
      </li>
      <li className="project__card">
        <div className="project__info">
          <div className="project__top">
            <h3 className="project__title">The Metropolitan Museum of Art</h3>
            <div className="links">
            <Link
              to="https://paulmaistrenko.github.io/layout_landing-page/"
              className="project__link demo__link icon"
              target='_blank'
            />
            <Link
              to="https://github.com/PaulMaistrenko/layout_landing-page"
              className="project__link code__link icon"
              target='_blank'
            />
            </div>
          </div>
          <p className="project__description">The pixel-perfect responsive landing page.</p>
          <div className="project__technologies">
            <p className="technologies__item">JavaScript</p>
            <p className="technologies__item">HTML</p>
            <p className="technologies__item">SCSS</p>
            <p className="technologies__item">BEM</p>
            <p className="technologies__item">FIGMA</p>
          </div>
        </div>
        <img
          src={MET_landing}
          alt="The Metropolitan Museum of Art"
          className="card__img"
        />
      </li>
      <li className="project__card">
        <div className="project__info">
          <div className="project__top">
            <h3 className="project__title">National Art Museum Of Ukraine</h3>
            <div className="links">
            <Link
              to="https://paulmaistrenko.github.io/Museum/"
              className="project__link demo__link icon"
              target='_blank'
            />
            <Link
              to="https://github.com/PaulMaistrenko/Museum"
              className="project__link code__link icon"
              target='_blank'
            />
            </div>
          </div>
          <p className="project__description">The pixel-perfect responsive landing page.</p>
          <div className="project__technologies">
            <p className="technologies__item">JavaScript</p>
            <p className="technologies__item">HTML</p>
            <p className="technologies__item">SCSS</p>
            <p className="technologies__item">BEM</p>
            <p className="technologies__item">FIGMA</p>
          </div>
        </div>
        <img
          src={Museum_landing}
          alt="National Art Museum Of Ukraine"
          className="card__img"
        />
      </li>
      <li className="project__card">
        <div className="project__info">
          <div className="project__top">
            <h3 className="project__title">Miami condo kings</h3>
            <div className="links">
            <Link
              to="https://paulmaistrenko.github.io/layout_miami/"
              className="project__link demo__link icon"
              target='_blank'
            />
            <Link
              to="https://github.com/PaulMaistrenko/layout_miami/tree/develop"
              className="project__link code__link icon"
              target='_blank'
            />
            </div>
          </div>
          <p className="project__description">The pixel-perfect responsive landing page.</p>
          <div className="project__technologies">
            <p className="technologies__item">JavaScript</p>
            <p className="technologies__item">HTML</p>
            <p className="technologies__item">SCSS</p>
            <p className="technologies__item">BEM</p>
            <p className="technologies__item">FIGMA</p>
          </div>
        </div>
        <img
          src={Miami_landing}
          alt="Miami condo kings"
          className="card__img"
        />
      </li>
      <li className="project__card">
        <div className="project__info">
          <div className="project__top">
            <h3 className="project__title">Online-store catalog</h3>
            <div className="links">
            <Link
              to="https://paulmaistrenko.github.io/react_phone-catalog/"
              className="project__link demo__link icon"
              target='_blank'
            />
            <Link
              to="https://github.com/PaulMaistrenko/react_phone-catalog"
              className="project__link code__link icon"
              target='_blank'
            />
            </div>
          </div>
          <p className="project__description">Gadgets catalog for 1440px - screen resolution.</p>
          <div className="project__technologies">
            <p className="technologies__item">JavaScript</p>
            <p className="technologies__item">React</p>
            <p className="technologies__item">TypeScript</p>
            <p className="technologies__item">HTML</p>
            <p className="technologies__item">SCSS</p>
            <p className="technologies__item">REST API</p>
          </div>
        </div>
        <img
          src={catalog}
          alt="Online-store catalog"
          className="card__img"
        />
      </li>
      <li className="project__card">
        <div className="project__info">
          <div className="project__top">
            <h3 className="project__title">Task manager</h3>
            <div className="links">
            <Link
              to="https://paulmaistrenko.github.io/react_todo-app/"
              className="project__link demo__link icon"
              target='_blank'
            />
            <Link
              to="https://github.com/PaulMaistrenko/react_todo-app"
              className="project__link code__link icon"
              target='_blank'
            />
            </div>
          </div>
          <p className="project__description">An interactive to-do created using functional components,
hooks, fetch, routing, and local storage.</p>
          <div className="project__technologies">
            <p className="technologies__item">JavaScript</p>
            <p className="technologies__item">React</p>
            <p className="technologies__item">TypeScript</p>
            <p className="technologies__item">HTML</p>
            <p className="technologies__item">SCSS</p>
            <p className="technologies__item">REST API</p>
          </div>
        </div>
        <img
          src={todo_app}
          alt="Task manager"
          className="card__img"
        />
      </li>
      <li className="project__card">
        <div className="project__info">
          <div className="project__top">
            <h3 className="project__title">Strategy squared</h3>
            <div className="links">
            <Link
              to="https://paulmaistrenko.github.io/js_2048_game/"
              className="project__link demo__link icon"
              target='_blank'
            />
            <Link
              to="https://github.com/PaulMaistrenko/js_2048_game"
              className="project__link code__link icon"
              target='_blank'
            />
            </div>
          </div>
          <p className="project__description">The game is written in pure Java Script.</p>
          <div className="project__technologies">
            <p className="technologies__item">JavaScript</p>
            <p className="technologies__item">React</p>
            <p className="technologies__item">TypeScript</p>
            <p className="technologies__item">HTML</p>
            <p className="technologies__item">SCSS</p>
          </div>
        </div>
        <img
          src={game}
          alt="Strategy squared"
          className="card__img"
        />
      </li>
    </ul>
  );
}