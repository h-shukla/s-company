import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import Header from './components/layout/Header/Header.js';
import Footer from './components/layout/Footer/Footer.js';
import Home from './components/Home/Home.js'

function App() {
  // all react hooks must be called inside a function
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka']
      }
    })
  }, [])

  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Footer />
    </Router>
  )
}

export default App;