import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Douong from './components/pages/Douong';
import Phache from './components/pages/Phache';
import Postsingle from './components/Postsingle';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/douong' exact component={Douong}/>
          <Route path='/phache' exact component={Phache}/>
          <Route path='/postsingle' exact component={Postsingle}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;