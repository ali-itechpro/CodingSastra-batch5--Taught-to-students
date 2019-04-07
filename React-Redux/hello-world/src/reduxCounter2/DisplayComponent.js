import React, { Component } from 'react';
import {store} from './reduxStore'

class DisplayComponents extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         }

         store.subscribe(()=>{
             this.setState({
                 count:store.getState()
             })
         })

         
    }
    render() { 
        return ( 
            <div className="border">
            <h2>Display Component</h2>
            <div style={{color:'red',fontSize:'50px',fontWeight:'bold'}}>{this.state.count}</div>
                 
            </div>
         );
    }
}
 
export default DisplayComponents;