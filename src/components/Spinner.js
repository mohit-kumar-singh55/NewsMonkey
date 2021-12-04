import React, { Component } from 'react'
import loader from './loader.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="my-3 text-center">
                <img src={loader} alt="loading" />
            </div>
        )
    }
}

export default Spinner
