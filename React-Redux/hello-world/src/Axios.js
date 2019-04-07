import React, { Component } from 'react';
import Axios from 'axios'

class AxiosAPI extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]

         }
    }

    // ApiCall=()=>{

       
    // }

    componentDidMount(){

        // this.ApiCall();

        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((result)=>{
            //console.log(result.data);
            this.setState({
               data:result.data
            })
        })

    }

    render() { 
        return ( 

            <div className="col-md-4 border offset-4 mt-5">
                <h1 className="text-primary text-center">Axios API Request</h1>
                <table className="table table-striped table-bordered table-hover">
                <tbody>
                        {
                            this.state.data.map((result)=>{
                                return  <tr key={result.id}>
                                         <td >{result.company.bs}</td>
                                       </tr>
                            })
                        }
                        </tbody>
                </table>
            </div>

         );
    }
}
 
export default AxiosAPI;