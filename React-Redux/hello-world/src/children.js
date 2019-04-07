import React,{Component} from 'react'

class Children extends Component{
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
            <div className="col-md-4"> <h1 className="text-primary">{this.state.txt}</h1>
              <Widget update={this.update} />
            </div>
        )
    }


}

const Widget=(props)=>{

 return <input type="text" className="form-control"  onChange={props.update}></input>
}

export default Children