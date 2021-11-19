import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Footer from './Components/layout/Footer'
import Navbar from './Components/layout/Navbar'
import Login from './Components/Login'
import Register from './Components/Register'
import Services from './Components/Services'

const App = () => {
  return (
    <Router>
    <>
      <Navbar/>
      <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
      </div>
      <Footer/>
    </>
    </Router>
  )
}

export default App
