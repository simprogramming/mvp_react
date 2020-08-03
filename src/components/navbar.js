import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import Reporting from '../pages/Reporting';
import Budget from '../pages/Budget';
import Projects from '../pages/Projects';


function Navbar() {
return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Reporting</Link>
            </li>
            <li>
              <Link to="/Budget">Budget</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Reporting} />
          <Route path="/Budget" component={Budget} />
          <Route path="/Projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar
