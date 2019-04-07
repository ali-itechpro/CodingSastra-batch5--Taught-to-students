import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos:[],
            todo:''
         }
    }

    update=(e)=>{

        this.setState({
            todo:e.target.value
        })

    }

    AddToDo=()=>{
        this.setState({
            todos: [...this.state.todos,this.state.todo]
            
        })
    }


    render() { 
        return ( 
            <div className="col-md-4 border offset-4 mt-5">
                <h1 className="text-center text-primary">Todo List</h1>
                <input type="text" className="form-control" onChange={this.update} value={this.state.todo}></input>
                <button className="btn btn-primary btn-block mt-2 mb-5" onClick={this.AddToDo}>Add</button>

                <div>
                    <ul>
                    {
                        this.state.todos.map((to)=>{
                            return <li>{to}</li>
                        })
                    }
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default TodoList;