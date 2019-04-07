import React, { Component } from 'react';
class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
            <div className="row">
            <div className="col-md-3 border">
            <div className="row">
            <div className="col-md-2 border">sub column 1</div>
            <div className="col-md-2 border">sub column 1</div>
            <div className="col-md-2 border">sub column 1</div>
            <div className="col-md-2 border">sub column 1</div>
            <div className="col-md-2 border">sub column 1</div>
            <div className="col-md-2 border">sub column 1</div>
            </div>
            </div>
            <div className="col-md-3 border">column2</div>
            <div className="col-md-3 border">column3</div>
            <div className="col-md-3 border">column4</div>
            </div>
            </div>
         );
    }
}
 
export default Testing;