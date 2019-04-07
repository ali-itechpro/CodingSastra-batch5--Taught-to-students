import React, { Component } from 'react';

class Map extends Component{

    constructor(){
        super();

        this.state={
            name:"Verma Bhupatiraju",
            friends:["Ram","Robert","Rahim"],
            fruits:["Apple", "Banana","Pine Apple","Papaya","Strawberry"]
        }
    }

    render(){
        return(
            <div className="col-md-6">
                <h1 className="text-primary">Name: {this.state.name}</h1>
                <ul>
                    {
                        this.state.friends.map((friend)=>{
                            return <li className="text-info">{friend}</li>
                        })
                    }
                </ul>

            <br></br>
            <ul>
                {
                    this.state.fruits.map((fruit)=>{
                       return <li style={{color:'red'}}>{fruit}</li> 
                    })
                }
            </ul>
            </div>
        )
    }
}

export default Map