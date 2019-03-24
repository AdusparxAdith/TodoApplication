import React from "react";

export default class AddTodo extends React.Component {
  state = {
    title: "",
    placeholder: "Add Todo.."
  };

  componentWillUpdate(nextProps, nextState) {
    errorstyle = nextProps.theme.placeholder;
  }

  getSubmitStyle = () => {
    const { background, color } = this.props.theme.subButton;
    return {
      background,
      color,
      display: "inline-block",
      border: "none",
      padding: "1px 25px",
      cursor: "pointer",
      fontFamily: "Overlock",
      transition: "1s"
    };
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.title !== "") {
      errorstyle = "";
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
      this.setState({ placeholder: "Add Todo.." });
    } else {
      this.setState({
        placeholder: "Add a valid Todo and try again.."
      });
    }
  };

  takeInput = e => {
    return this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    errorstyle = this.props.theme.placeholder;
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "15px" }}
          placeholder={this.state.placeholder}
          className={`addTodo ${errorstyle}`}
          value={this.state.title}
          onChange={this.takeInput}
        />
        {/* <input
          type="submit"
          value="submit"
          className={"submitBtn"}
          style={this.getSubmitStyle()}
          onClick={this.onSubmit}
        /> */}
        <div
          className="sbtn"
          style={this.getSubmitStyle()}
          onClick={this.onSubmit}
        >
          <img
            src="http://www-scf.usc.edu/~mdemirji/acad275/images/arrow.png"
            width="30px"
          />
        </div>
      </form>
    );
  }
}

let errorstyle = "";
