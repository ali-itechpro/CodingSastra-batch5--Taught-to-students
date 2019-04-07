import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Props extends Component{

    render(){

        return(
            <div>
                <h1>{this.props.data}</h1>
                <h1>{this.props.name}</h1>
                <h1>{this.props.mobile}</h1>
            </div>
        )
    }


}


Props.propTypes={
    data: PropTypes.string.isRequired,
    name: PropTypes.string,
    mobile: PropTypes.number
}

export default Props