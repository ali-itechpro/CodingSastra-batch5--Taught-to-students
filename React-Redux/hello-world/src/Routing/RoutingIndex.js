import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import NotFound from './NotFound'
import Header from '../Header'
import Footer from '../Footer'


class Routing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header/>
                <Router>
                    <div>
                        <ul>
                            <li> <NavLink to="/"  activeStyle={{color:'red',border:'1px solid #ccc',padding:'3px'}}>Home</NavLink></li>
                            <li> <NavLink to="/aboutus" activeStyle={{color:'red',border:'1px solid #ccc',padding:'3px'}}>About Us</NavLink></li>
                            <li> <NavLink to="/contact" activeStyle={{color:'red',border:'1px solid #ccc',padding:'3px'}} >Contact</NavLink></li>
                            <li> <NavLink to="/feedback" activeStyle={{color:'red',border:'1px solid #ccc',padding:'3px'}}>Feedback</NavLink></li>
                        </ul>

                <Switch>
                    <Route exact path="/" component={Home}  />
                    <Route path="/aboutus" component={AboutUs}  />
                    <Route path="/contact" component={Contact}  />
                    <Route  component={NotFound}/>
                    </Switch>
                    </div>
                </Router>
                <Footer/>
            </div>
         );
    }
}
 
export default Routing;