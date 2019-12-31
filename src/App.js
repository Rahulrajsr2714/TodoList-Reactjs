import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import Addtodo from './components/Addtodo';
import Countertest from './additional/Countertest';
import Navbar from './layouts/Navbar';
import axios from 'axios'



class App extends React.Component {
  
  state = {todos:[]}
  
//Unhide the below code if you want to fetch data from a api
  // async componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res=>{
  //     const todos = res.data
  //     this.setState({todos})
  //   })
  // }

  updateStatus=(id)=>{
   this.setState({
     todos:this.state.todos.map((todo)=>{
       if(todo.id === id){
          todo.completed = !todo.completed
       }
       return todo
      })
   })
  }

  removeItem=(id)=>{
    const items = this.state.todos.filter(item=>item.id!==id)
    this.setState({todos:items})
   }

  addtodo=(newtask)=>{
    var x = this.state.todos.length
    this.setState({
      todos:this.state.todos.concat({id:x,name:newtask,completed:false})
    })
  }

  render() {
    return (
      
      <React.Fragment>
      <Router>
        <Navbar/>
        <div class="container">
        
        <switch>
          <Route exact path = '/' render = {(props)=>(
              <React.Fragment>
              <Addtodo add={this.addtodo}/>
              <TodoList changeVal = {this.updateStatus} removeVal = {this.removeItem} todos = {this.state}/>
            </React.Fragment>
            )}/>
          <Route exact path = '/aboutus' render = {()=>(
            <Countertest/>
          )}/>

        </switch>          
          
        
        </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App

