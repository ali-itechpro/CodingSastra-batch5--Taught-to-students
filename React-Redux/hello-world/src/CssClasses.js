import React, { Component } from 'react';

class CssClasses extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    divStyle={
        color:'green',
        fontWeight:'bold'
    }
    render() { 
        return ( 
            <div>
                <h1 className="text-custom-color">Hello World! -CssClass external</h1>
                <h1 id="text-custom-color2">Coding Sastra! - ID Class external</h1>
                <h1 style={{color:'red', fontWeight:'bold' }}>Inline Css Class</h1>
                <h1 style={this.divStyle}>Embedded Styles</h1>
            </div>
         );
    }
}
 
export default CssClasses;
