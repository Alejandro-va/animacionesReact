import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

//components
import Home from './pages/Home';
import About from './pages/About';
import Newsletter from './pages/Newsletter';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/newsletter" component={Newsletter} />{/*  ><Newsletter/></Route> */}
      </Switch>
    </div>
  );
}

export default App;
