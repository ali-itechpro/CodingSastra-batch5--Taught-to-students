import React,{Component} from 'react'

class StateIncDec extends Component{

    constructor(){
        super();

        this.state={
            counter:0
        }
    }

    Increment=()=>{
        this.setState({
            counter: this.state.counter +1
        })
    }

    Decrement=()=>{
            this.setState({
                counter: this.state.counter -1
            })
    }

    render(){
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.Increment} >Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </div>
        )
    }

}

export default StateIncDec