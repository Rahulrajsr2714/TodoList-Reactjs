import React, { Component } from 'react'

class Addtodo extends Component {
    constructor(){
        super()
        this.state = {newTask : ""} //Initialization of state
        this.addNewtask = this.addNewtask.bind(this)
        this.handleChange = this.handleChange.bind(this) //binding the method to this class 
    }
    addNewtask (evnt){
        evnt.preventDefault() // to prevent the page from reloading 
        this.props.add(this.state.newTask) //calling a function in parent component 
        //through props and passing the state as argument
        this.setState({newTask:""}) //resetting the state to empty out the input text
    }
    handleChange(evnt){
        this.setState({newTask:evnt.target.value}) //will update the state when user input changes
    }
    

    


    render() {
        return (
            <div class = "col-md-4 offset-md-4 list-group mt-5">
            <form onSubmit = {this.addNewtask}>
                <div className="form-group">
                    <label>Enter your new task</label>
                    <input value={this.state.newTask} onChange={this.handleChange} type="text" className="form-control"/>
                </div>
                <h6>The value is {this.state.newTask}</h6>
                <button style={{float:"right"}} type="submit" class="btn btn-success">Submit</button>
            </form>
            </div>
        )
    }
}

export default Addtodo
