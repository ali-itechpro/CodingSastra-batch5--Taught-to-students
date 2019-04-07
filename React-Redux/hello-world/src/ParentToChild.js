import React, { Component } from 'react';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tech:["React","Express","MongoDB"]
        }
    }
    render() {
        return (
            <div className="border col-md-6 offset-3">
                <h1>Library - Parent component</h1>
                <Booklist data={this.state.tech}/>
            </div>
        );
    }   
}


class Booklist extends Component{
    render(){
        return (
            <div Class="border">
            <h3>Booklist - Child component</h3>
            <h2 className="text-danger">{this.props.data}</h2>
            </div>
        )
    }
}

 
export default Library;