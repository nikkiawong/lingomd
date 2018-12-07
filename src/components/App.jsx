import React from 'react';
import Error404 from './Error404';
import Search from './Search';
import Results from './Results';
import Footer from './Footer';
import ResultDetail from './ResultDetail';
import { Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path='/'
          component={Search} />
          <Route exact path='/results'
          component={Results} />
          <Route exact path='/result-detail'
          component={ResultDetail} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;