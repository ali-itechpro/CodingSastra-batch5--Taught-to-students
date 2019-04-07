import React, { Component } from 'react';

class FetchApiSecond extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            info:[]
         }
    }

    fetchApi=()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data)=>{
            this.setState({
                info:data
            })
        })

    }

    componentDidMount(){
        this.fetchApi();
    }

 

    render() { 
        return ( 
            <div className="col-md-4 border mt-5">
                <h1 className="text-center text-primary">Fetch API</h1>
                <h1 className="text-danger">{this.state.counter}</h1>
               <ol>
                   {
                       this.state.info.map((data)=>{
                           return <li key={data.id} className="text-primary">{data.company.name}</li>
                       })
                   }
               </ol>

            </div>
         );
    }
}
 
export default FetchApiSecond;