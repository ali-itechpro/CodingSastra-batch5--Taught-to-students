import React, { Component } from 'react';

class LocalCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         }
    }

    handleIncrement=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }

    handleDecrement=()=>{
        this.setState({
            count:this.state.count -1
        })
    }
    render() { 
        return ( 
            <div className="border col-md-4 offset-4 mt-5">
            <h2>Local Component Counter</h2>
            <h1 className="text-primary">{this.state.count}</h1>
            <button className="btn btn-success" onClick={this.handleIncrement}>Increment</button> &nbsp;
            <button className="btn btn-danger" onClick={this.handleDecrement}>Decrement</button> 

            </div>
         );
    }
}
 
export default LocalCounterComponent;