import React, {useEffect} from 'react';
import Navbar from './pages/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Post from './pages/Post';

import {Analytics} from 'aws-amplify';


const App = () => {

  useEffect(() => {
    Analytics.record('Home page visit');
    Analytics.record({
      name: "UserSignIn",
      attributes: {
        userName: "Derek"
      }
    })
  },[])

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:post_id' component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
