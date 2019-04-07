import React, { Component } from 'react';

class Syntheticevents extends Component {
    constructor() {
        super();
        this.state = { currentEvent: '---' }
    }

    update=(e)=> {
        this.setState({ currentEvent: e.type })
    }

    render() {
        return (
            <div className="col-md-6 mt-5 pt-5">
                <textarea
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    //onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
                    onClick={this.update}
                    cols="30" rows="10" />
                <h1 className="text-primary ">{this.state.currentEvent}</h1>
            </div>)
    }
}
export default Syntheticevents; 