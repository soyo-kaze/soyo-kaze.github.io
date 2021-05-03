import React from 'react'
import '../styles/App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Home.js'
import Footer from './Footer.js'


const App = () => {
    return (
        <Router>
			<div style={{height:60}}></div>
			<Switch>
			<Route exact path="/" component={Home}/>
			</Switch>
			<Footer/>
		</Router>
    )
}

export default App
