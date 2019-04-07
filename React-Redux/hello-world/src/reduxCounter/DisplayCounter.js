import React, { Component } from 'react';
import {store} from './ReduxCounterStore'

class DisplayCounter extends Component {
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
            <div className="border text-center">
            <h3 className="text-primary">Display Counter Component</h3>
            <h1 className="text-success text-center">{this.state.count}</h1>
            </div>
         );
    }
}
 
export default DisplayCounter;