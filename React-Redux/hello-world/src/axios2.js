import React, { Component } from 'react';
import axios from 'axios'

class Axios2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fruits:[]
         }
    }

    handleData=()=>{
       axios.get("http://127.0.0.1:5500/src/information.json")
        //axios.get("https://jsonplaceholder.typicode.com/users")
        .then((result)=>{
            console.log(result);
        //   this.setState({
        //     fruits: result.data
        //   })
        })
    }

    render() { 
        return (  

          
                <div className="col-md-4 border mt-5 offset-4">
                <h1>axios get json data</h1>

                <button onClick={this.handleData}>Bring Data</button>

               {
                   this.state.fruits.map((data)=>{
                       return <li>{data.RawVegetables}</li>
                   })
               }
                </div>
          
        );
    }
}
 
export default Axios2;