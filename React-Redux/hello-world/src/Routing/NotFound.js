import React, { Component } from 'react';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1 className="text-danger">Sorry, this page is not available</h1>
            </div>
         );
    }
}
 
export default NotFound;