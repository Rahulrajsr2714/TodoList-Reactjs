import React, { Component } from 'react'

class Formstest extends Component {
    constructor(props) {  
        super(props);  
        this.state = {  
            companyName: ''  ,
            companyNameReverse: '' 
        };  
    }  
    changeText(event) {  
        this.setState({  
            companyName: event.target.value , 
            companyNameReverse: event.target.value.split("").reverse().join("")
        });  
    } 
    render() {
        return (
            <div>
                <h2>Simple Event Example</h2>  
                <label htmlFor="name">Enter company name: </label>  
                <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>  
                <h4>You entered: { this.state.companyName }</h4>  
                <h4>You reversly entered: { this.state.companyNameReverse }</h4>  
            </div>
        )
    }
}

export default Formstest
