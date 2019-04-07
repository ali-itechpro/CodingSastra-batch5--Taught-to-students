import React, { Component } from 'react';

class ControlledComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
          }
    }

    update=(event)=>{
        this.setState({
            value:event.target.value
        })

    }

    handleSubmit=(event)=>{
        alert('A name has been submitted' + this.state.value);
        event.preventDefault();
       // console.log("submitted");
    }




    render() { 
        return ( 
            <form className="col-md-6 border offset-3 mt-5" onSubmit={this.handleSubmit}>
                <label className="text-info">
                    Name:
                </label>
                <input type="text" className="form-control" onChange={this.update} value={this.state.value}></input>
                <input type="submit" value="Submit" className="btn btn-primary btn-block mt-2 mb-5"></input>
                {/* <div className="text-danger">{this.state.value}</div> */}
            </form>
         );
    }
}
 
export default ControlledComponents;