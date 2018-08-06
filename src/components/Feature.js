import React, { Component } from 'react'
import reqireAuth from './reqireAuth';

class Feature extends Component {
    render() {
        return (
            <div>This is Feature</div>
        )
    }
}

export default reqireAuth(Feature);