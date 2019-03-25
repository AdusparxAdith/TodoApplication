import React, { Component } from "react";
import TodoList from "./components/TodoList";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import Footer from "./components/layout/footer";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [],
    theme: {
      header: {
        background: "#eb3b5a",
        color: "#fff"
      },
      subButton: {
        background: "#fc5c65",
        color: "#fff"
      },
      clearButton: {
        background: "#fc5c65",
        color: "#fff",
        line: "#fc5c65"
      },
      placeholder: "redtodo"
    },
    showList: [],
    statusBar: ["all", "completed", "pending"],
    index: 1
  };

  /////////////////////////////////////////////////////// LIFE-CYCLE METHODS

  componentWillMount() {
    let currentDay = new Date();
    let updatedDay = new Date(localStorage.getItem("updatedOn"));
    if (currentDay - updatedDay >= 43200000) {
      const specialTodos = require("./resources/specialTodos");
      const splTodo =
        specialTodos[Math.floor(Math.random() * specialTodos.length)];
      splTodo.id = uuid.v4();

      this.setState({ todos: [...this.state.todos, splTodo] });
      localStorage.setItem("updatedOn", currentDay);
    }

    localStorage.getItem("storedTodos") &&
      this.setState({
        todos: JSON.parse(localStorage.getItem("storedTodos"))
      });
    localStorage.getItem("storedTheme") &&
      this.setState({
        theme: JSON.parse(localStorage.getItem("storedTheme"))
      });
  }

  componentDidMount() {
    this.showTodos("all");
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("storedTodos", JSON.stringify(nextState.todos));
    localStorage.setItem("storedTheme", JSON.stringify(nextState.theme));
    localStorage.setItem("timestamp", Date.now());
  }
  /////////////////////////////////////////////////////// CUSTOM METHODS
  changeTheme = id => {
    const themeArr = require("./resources/themes");
    const themes = { ...themeArr.filter(theme => theme.id === id) };
    const getTheme = () => {
      for (const i in themes) {
        return themes[i];
      }
    };

    this.setState({
      theme: getTheme()
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      task: title,
      completed: false
    };

    this.setState({
      todos: this.state.todos.concat(newTodo),
      showList: this.state.todos.concat(newTodo)
    });
  };

  delTask = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
      showList: [...this.state.showList.filter(todo => todo.id !== id)]
    });
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  showTodos = status => {
    if (status === "completed") {
      this.setState({
        showList: [...this.state.todos.filter(todo => todo.completed === true)],
        index: 1
      });
    } else if (status === "all") {
      this.setState({
        showList: [...this.state.todos],
        index: 0
      });
    } else if (status === "pending") {
      this.setState({
        showList: [
          ...this.state.todos.filter(todo => todo.completed === false)
        ],
        index: 2
      });
    }
  };

  toggleScreen = direction => {
    if (direction === "right") {
      if (this.state.index !== 2) {
        this.setState({ index: this.state.index + 1 });
        this.showTodos(this.state.statusBar[this.state.index]);
      }
    } else if (direction === "left") {
      if (this.state.index !== 0) {
        this.setState({ index: this.state.index - 1 });
        this.showTodos(this.state.statusBar[this.state.index]);
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="heyyy" />
        <Header
          index={this.state.index}
          theme={this.state.theme.header}
          changeTheme={this.changeTheme}
          showTodos={this.showTodos}
          toggleScreen={this.toggleScreen}
        />
        <AddTodo addTodo={this.addTodo} theme={this.state.theme} />
        <TodoList
          tasks={this.state.showList}
          markComplete={this.markComplete}
          delTask={this.delTask}
          theme={this.state.theme.clearButton}
        />
        <Footer
          theme={this.state.theme.header}
          changeTheme={this.changeTheme}
        />
      </React.Fragment>
    );
  }
}

export default App;
