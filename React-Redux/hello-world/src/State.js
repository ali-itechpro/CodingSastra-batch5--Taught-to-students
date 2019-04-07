import React,{Component} from 'react'

class State extends Component{
    constructor(){
        super();
        this.state={
            txt:"This is the text...",
            cat:0

        }
    }

    update=(e)=>{
        this.setState({
            txt:e.target.value
        })
    }

    render(){
        return (
            <div> <h1 className="text-primary">{this.state.txt}</h1>
               <input type="text"  onChange={this.update}></input>
            </div>
        )
    }


}

export default State