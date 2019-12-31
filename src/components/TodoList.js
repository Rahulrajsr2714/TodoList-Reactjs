import React, { Component } from 'react'
import Todolistitem from './Todolistitem'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.changeList = this.changeList.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }
     changeList(id){
        this.props.changeVal(id)
    }
    removeItem(id){
        this.props.removeVal(id)
    }
    
     
    render() {
        
        return (
            <div class = " col-md-4 offset-md-4 list-group mt-5">
                {this.props.todos.todos.map((todoitem) =>(
                    <div><Todolistitem key={todoitem.id}
                     changeitem = {this.changeList} 
                     removeitem = {this.removeItem} 
                     item={todoitem}/></div> 
                ))}
            </div>
            
            
        )
    }
}

export default TodoList
