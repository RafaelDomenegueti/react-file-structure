import {
  BrowserRouter,
  Routes as Router,
  Route,
} from 'react-router-dom';

import { Home } from '../views/Home';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </BrowserRouter>
  );
}
