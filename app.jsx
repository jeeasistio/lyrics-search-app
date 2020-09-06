import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui';
import NavBar from '/components/Header/Navbar.jsx';
import Main from '/components/Main/Main.jsx';

import { TracksProvider } from '/contexts/TracksContext.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
        <TracksProvider>
          <CssBaseline>
            <div className="app">
              <NavBar />
              <Main />
            </div>
          </CssBaseline>
        </TracksProvider>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);