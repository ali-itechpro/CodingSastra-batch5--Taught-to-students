import React, { Component } from 'react';
import {store, ActionIncrement, ActionDecrement} from './reduxStore'

class ButtonComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    
    }

    handleIncreament=()=>{

        store.dispatch(ActionIncrement());

      //  console.log("you clicked on increament");
    }

    handleDecrement=()=>{

        store.dispatch(ActionDecrement());
       // console.log("you clicked on decrement");
    }


    render() { 
        return ( 
            <div className="border">
                <h2>Button Components</h2>
                <br></br>
                <button onClick={this.handleIncreament} className="btn btn-primary">Increment</button>&nbsp; 
                <button onClick={this.handleDecrement} className="btn btn-danger">Decrement</button>
            </div>
         );
    }
}
 
export default ButtonComponents;