import React,{Component} from 'react'

class FetchApi extends Component{

    state={
        users:[]
    }
    

    fetchApi=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data)=>{
            this.setState({
                users:data
            })
        })

    }

    componentDidMount(){
        this.fetchApi();
    }

    render(){
        return(
            <div className="col-md-12">
            <h1 className="text-primary text-center">Fetch users API</h1>
            <div className="row">
                <div className="col-md-4">
                <h2 className="text-center text-primary">Names</h2>
                    <ul>
                        {
                            this.state.users.map((data)=>{
                                return <li className="text-primary" key={data.id}>{data.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-4">
                <h2 className="text-center text-dark">Email Id's</h2>
                    <ul>
                        {
                            this.state.users.map((data)=>{
                                return <li className="text-primary" key={data.id}>{data.email}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-4">
                <h2 className="text-center text-warning">City</h2>
                    <ul>
                        {
                            this.state.users.map((data)=>{
                                return <li className="text-primary" key={data.id}>{data.address.city}</li>
                            })
                        }
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default FetchApi