import React,{Component} from 'react';
import Navigation from './Navigation';

class Header extends Component{

    render(){

        return <div><h1>Header Component</h1>
        <Navigation text="some value"/>
        </div>
    }

}

export default Header