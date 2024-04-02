import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home/Home';
import { Contacts } from './pages/Contacts/Contacts';
import { Projects } from './pages/Projects/Projects';
import { About } from './pages/About/About';

export const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
    </Routes>
  </Router>
);