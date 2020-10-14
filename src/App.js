import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

import LayoutComponent from './Components/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/" component={ LayoutComponent}/>
      </Switch>
    </Router>
  );
}

export default App;
