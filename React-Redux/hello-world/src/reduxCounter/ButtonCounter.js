import React, { Component } from 'react';
import {store, increment, decrement} from './ReduxCounterStore'

class ButtonCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleIncrement=()=>{
        store.dispatch(increment());
    }

    handleDecrement=()=>{
        store.dispatch(decrement());
    }

    render() { 
        return ( 

            <div className="border text-center mt-3">
           <br></br>
            <button className="btn btn-success" onClick={this.handleIncrement}>Increment</button> &nbsp;
            <button className="btn btn-danger" onClick={this.handleDecrement}>Decrement</button>
            <h3 className="text-primary">Button Counter Component</h3>
            </div>
         );
    }
}
 
export default ButtonCounter;