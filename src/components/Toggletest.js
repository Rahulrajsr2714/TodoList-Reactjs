import React, { Component } from 'react'

export class Toggletest extends Component {
    constructor(){
        super()
        this.state = {isToggledon : true}

        this.handleclick = this.handleclick.bind(this)
    }
    handleclick(){
        this.setState(state =>({
            isToggledon : !this.state.isToggledon
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleclick}>
                    {this.state.isToggledon?'on':'off'}
                </button>
            </div>
        )
    }
}

export default Toggletest
