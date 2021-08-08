import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import Registration from './components/pages/Registration';
import Footer from './components/Footer';




ReactDOM.render(
    
    <Router>
    <Navbar />
      <Switch>
      <Route exact path='/'  component= {Home}/>
      <Route exact path='/services' component={Services} />
          <Route exact path='/contactus' component={ContactUs} />
         <Route exact path='/sign-up' component={Registration} />
         <Redirect to ="/"/>
      </Switch>
      <Footer/>
    </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
