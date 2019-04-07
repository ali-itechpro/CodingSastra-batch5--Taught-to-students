import React, { Component } from 'react';
import MyImage from './images/download.png'

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <img src={MyImage} alt="Img" />
            </div>
         );
    }
}
 
export default Image;