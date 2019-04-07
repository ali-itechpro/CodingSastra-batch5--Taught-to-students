import React, { Component } from 'react';

class LifeCycleMethods extends Component{
    constructor(){
        super();

        this.state={
            counter:0
        }

        console.log("1 Constructor Method");
    }


    

    componentDidMount(){
        console.log("4 Component Did Mount Method");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    update=()=>{
        this.setState({
            counter:this.state.counter +1
        })
    }

    render(){
        console.log("3 Render Method");
        return(
            <div className="col-md-4">
                <h1 className="text-primary">Components Life Cycle Methods</h1>
                <button onClick={this.update} className="btn btn-warning">Counter: {this.state.counter}</button>
                
            </div>
        )
    }

    componentWillMount(){
        console.log("2 Component Will Mount Method")

    }

    shouldComponentUpdate(){
       // console.log(" Should Component Update Method");
       return true;

    }

    componentWillUpdate(){
        console.log("Component Will Update Method");

    }

    componentDidUpdate(){

        console.log("Component Did Update Method");
    }


}

export default LifeCycleMethods