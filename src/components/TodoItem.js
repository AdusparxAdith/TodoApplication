import React, { Component } from "react";
import PropTypes from "prop-types";
import Hammer from "react-hammerjs";
const url = require("C:/Users/Adusparx/Desktop/React Projects/src/resources/reward.png");

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      flag: false
    };
    this.delTaskEvent = this.delTaskEvent.bind(this);
  }

  delTaskEvent = id => {
    this.setState({
      flag: true
    });
    setTimeout(() => {
      this.props.delTask(id);
    }, 600);
  };

  getCrossStyle = () => {
    const { background, color } = this.props.theme;
    return {
      background,
      color,
      border: "none",
      fontSize: "90%",
      padding: "1px 7px",
      borderRadius: "50%",
      cursor: "pointer",
      float: "right",
      transition: "1.1s"
    };
  };

  getTodoStyle = () => {
    if (!this.props.todo.special) {
      return {
        padding: "2px 12px",
        borderBottom: "1px #ccc dotted",
        color: this.props.todo.completed ? this.props.theme.line : "black",
        textDecoration: this.props.todo.completed ? "line-through" : "none",
        fontSize: "110%",
        fontFamily: "Overlock"
      };
    }
    // SPECIAL TASK RETURN
    return {
      background: "#ffeaa7",
      border: "1.5px solid #FFCF40",
      padding: "2px 12px",
      color: this.props.todo.completed ? this.props.theme.line : "black",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      fontSize: "110%",
      fontFamily: "Overlock",
      transition: "1s"
    };
  };

  render() {
    const splImgStyle = {
      display: this.props.todo.special ? "inline" : "none",
      position: "absolute",
      left: "0px",
      top: "-10px"
    };
    const splPStyle = {
      display: this.props.todo.special ? "inline" : "none",
      position: "absolute",
      left: "25px",
      top: "-12px",
      fontStyle: "oblique",
      fontFamily: "cursive",
      fontSize: "0.7rem"
    };
    const { id, task } = this.props.todo;
    return (
      <Hammer
        onSwipe={this.delTaskEvent.bind(this, id)}
        direction="DIRECTION_RIGHT"
      >
        <div
          className={`todoItem ${this.state.flag ? "tododel" : ""}`}
          style={this.getTodoStyle()}
        >
          {" "}
          <img src={url} width="20px" style={splImgStyle} />
          <p style={splPStyle}>Get reward</p>
          <p>
            <input
              type="checkbox"
              defaultChecked={this.props.todo.completed}
              onChange={this.props.markComplete.bind(this, id)}
            />{" "}
            {task}
            <button
              style={this.getCrossStyle()}
              onClick={this.delTaskEvent.bind(this, id)}
            >
              -
            </button>
          </p>
        </div>
      </Hammer>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired
};

export default TodoItem;
