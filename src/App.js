import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About.js';
import 'materialize-css/dist/css/materialize.min.css';
import store from './store';
import { Provider } from 'react-redux';

import './App.css';

const App = () => { 
   
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />        
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>     
      </div>
      </BrowserRouter>   
    </Provider>     
  );
}

export default App;
