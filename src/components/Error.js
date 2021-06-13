import React, { Component } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
export default class Error extends Component {
    render() {
        return (
            <div className="text-center">
                <p className="lead">{this.props.error}</p>
            </div>
        )
    }
}
