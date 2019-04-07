import React, { Component } from 'react';
import ButtonComponents from './ButtonComponent'
import DisplayComponents from './DisplayComponent'

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className="col-md-6 border mt-5 text-center offset-3">
                <h1>Main Component</h1>
                <DisplayComponents/>
                <ButtonComponents/>
            </div>

         );
    }
}
 
export default MainComponent;