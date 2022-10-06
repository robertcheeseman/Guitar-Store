import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import Contact from './views/Contact';
import Signup from './views/Signup';
import Login from './views/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Electric from './views/Electric';
import Acoustic from './views/Acoustic';
import Bass from './views/Bass';
import Ukulele from './views/Ukulele';
import Cart from './views/Cart';
import Dashboard from './views/Dashboard';

export default class App extends Component {

  logMeIn = (data) => {
    this.setState({user: data})
  }

  logMeOut = (e) => {
    this.setState({})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Electric' element={<Electric />}></Route>
            <Route path='/Acoustic' element={<Acoustic />}></Route>
            <Route path='/Bass' element={<Bass />}></Route>
            <Route path='/Ukulele' element={<Ukulele />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>
            <Route path='/Signup' element={<Signup />}></Route>
            <Route path='/Login' element={<Login logMeIn={this.logMeIn}/>}></Route>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}