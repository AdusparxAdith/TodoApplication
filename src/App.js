import React, { Component } from 'react';
import TodoList from './components/TodoList'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import Footer from './components/layout/footer'
import uuid from 'uuid'


class App extends Component {
  state = {
    todos: [],
    theme:{
      header:{
        background: '#eb3b5a',
        color: '#fff'
      },
      subButton:{
        background: '#fc5c65',
        color: '#fff'
      },
      clearButton:{
        background: '#fc5c65',
        color: '#fff',
        line: '#fc5c65',
      }
    }
  }


/////////////////////////////////////////////////////// LIFE-CYCLE METHODS

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('storedTodos', JSON.stringify(nextState.todos))
    localStorage.setItem('timestamp', Date.now())

  }

  componentWillMount(){
    localStorage.getItem('storedTodos') && this.setState({
      todos: JSON.parse(localStorage.getItem('storedTodos'))
    })
  }


/////////////////////////////////////////////////////// CUSTOM METHODS
  changeTheme = (id) => {
    const themeArr = require('./resources/themes')
    const themes = {...themeArr.filter( theme => theme.id === id)}    
    const getTheme = () => {for(const i in themes){
      return themes[i]
      }
    }
     
    this.setState({
      theme: getTheme()
    })
  }
  addTodo = (title) => {
    const newTodo = {
      id:uuid.v4(),
      task:title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo]})
  }

  delTask = (id) => {
    this.setState({
      todos : [...this.state.todos.filter( todo => todo.id !== id)]
    })
  }

  markComplete = (id) =>{
    this.setState(
      {
        todos: this.state.todos.map( todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    )
  }
  render() {

    return (
      <div>
              <Header theme={this.state.theme.header} changeTheme={this.changeTheme}/>
              <AddTodo addTodo={this.addTodo} theme={this.state.theme.subButton}/>
              <TodoList tasks={this.state.todos} markComplete={this.markComplete} delTask={this.delTask} theme={this.state.theme.clearButton}/>  
              <Footer />   
      </div>    
    );
  }
}

export default App;
