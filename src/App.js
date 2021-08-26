import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Footer from './Components/layout/Footer'
import Navbar from './Components/layout/Navbar'
import Services from './Components/Services'

const App = () => {
  return (
    <Router>
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
    </Router>
  )
}

export default App
