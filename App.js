import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route,} from 
'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup from './components/pages/SignUp';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={Signup} />
        
      </Switch>
      <Footer />
      </Router>
      
      
    </>
  );
}

export default App;
