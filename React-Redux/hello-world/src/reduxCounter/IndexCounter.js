import React, { Component } from 'react';
import ButtonCouter from './ButtonCounter'
import DisplayCounter from './DisplayCounter'

class IndexCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="border col-md-6 offset-3 text-center" >
            <h1>Main Index Component</h1>
            <DisplayCounter/>
            <ButtonCouter/>

            </div>
         );
    }
}
 
export default IndexCounter;