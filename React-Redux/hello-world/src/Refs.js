import React, { Component } from 'react';

class Refs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.firstName=React.createRef();
        this.lastName=React.createRef();
    }

    handleSubmit=()=>{
        this.firstName.current.focus();
    }

    componentDidMount(){
        this.firstName.current.focus();
    
    }

    KeyUP=(e)=>{
       // console.log(e.keyCode);
       if(e.keyCode===13){
            this.lastName.current.focus();
       }

    }

    render() { 
        return ( 
            <div className="col-md-4 border mt-5 offset-4">
                <h1>Refs and the DOM</h1>
                <span>Enter First Name</span>
                <input ref={this.firstName} type="text" onKeyUp={this.KeyUP} className="form-control"/>
                <span>Enter Last Name</span>
                <input ref={this.lastName} type="text" className="form-control"/>
                <button onClick={this.handleSubmit} className="btn btn-primary mt-3">Submit</button>

            </div>
         );
    }
}
 
export default Refs;