import React, { Component } from "react";
import uuid from "uuid";

export default class SortBar extends Component {
  showHandle = item => {
    this.props.showTodos(item);
  };
  render() {
    const barItem = {
      flex: "1",
      border: "0.0099rem solid",
      borderColor: this.props.theme.background,
      color: this.props.theme.background
    };
    const barPara = { textAlign: "center", cursor: "pointer", margin: "7px" };
    return this.props.items.map(item => (
      <div
        className="barItem"
        key={uuid.v4()}
        style={barItem}
        onClick={this.showHandle.bind(this, item.toLowerCase())}
      >
        <p style={barPara}>{item}</p>
      </div>
    ));
  }
}
