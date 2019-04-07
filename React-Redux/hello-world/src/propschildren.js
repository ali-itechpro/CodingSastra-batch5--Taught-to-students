import React, { Component } from 'react';

class PropsChildren extends Component {
    render() {
        return <Button>I <Heart/> React</Button>
    }
}

const Button = (props) => <button className="btn btn-primary">{props.children}</button>

class Heart extends React.Component {
    render() {
        return <span>♥</span>
    }
} 

export default PropsChildren