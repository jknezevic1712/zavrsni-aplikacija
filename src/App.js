import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import OAutoru from './components/OAutoru';
import Knjige from './components/Knjige';
import UnosKnjiga from './components/UnosKnjiga';
import { KnjigeListaProvider } from './components/KnjigeListaContext';

const App = () => {

  return (
    <Router>
      <KnjigeListaProvider>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Knjige} />
            <Route path="/o_autoru" component={OAutoru} />
            <Route path="/unos_knjiga" component={UnosKnjiga} />
          </Switch>
        </div>
      </KnjigeListaProvider>
    </Router>
  );
};

export default App;
