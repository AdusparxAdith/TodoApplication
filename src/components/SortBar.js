import React, { Component } from "react";
import uuid from "uuid";

export default class SortBar extends Component {
  showHandle = item => {
    this.props.showTodos(item);
  };

  getStyle = index => ({
    // background: index === this.props.index ? this.props.theme.background : "",
    // textDecoration: index === this.props.index ? "underline" : "",
    flex: "1",
    borderBottom: index === this.props.index ? "2px solid" : "",
    transform: index === this.props.index ? "scale(1.1)" : "",
    borderColor: this.props.theme.background,
    // color:
    //   index === this.props.index
    //     ? this.props.theme.color
    //     : this.props.theme.background
    color: this.props.theme.background
  });
  render() {
    const barPara = { textAlign: "center", cursor: "pointer", margin: "7px" };
    return this.props.items.map((item, index) => (
      <div
        style={this.getStyle(index)}
        className="barItem"
        key={uuid.v4()}
        onClick={this.showHandle.bind(this, item.toLowerCase())}
      >
        <p style={barPara}>{item}</p>
      </div>
    ));
  }
}
