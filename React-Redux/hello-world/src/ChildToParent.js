import React, { Component } from 'react';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
         value:[]
        }
    }

    update=(data)=>{
        console.log(data);
        // this.setState({
        //     value:data
        // })


    }

    render() {
        return (
            <div className="border col-md-6 offset-3">
                <h1>Library - Parent component</h1>
                <ul>
                    {
                        this.state.value.map((data)=>{
                            return <li>{data}</li>
                        })
                    }
                </ul>
                <Booklist data={this.update}/>

            </div>
        );
    }   
}


class Booklist extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tech:["React","Express","MongoDB"]
        }
    }
    render(){
        return (
            <div className="border">
            <h3>Booklist - Child component</h3>
            <h2 className="text-danger">{this.props.data(this.state.tech)}</h2>
            </div>
        )
    }
}

 
export default Library;