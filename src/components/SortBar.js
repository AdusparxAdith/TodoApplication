import React, { Component } from "react";
import uuid from "uuid";

export default class SortBar extends Component {
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
        onClick={this.props.showTodos.bind(this, item.toLowerCase())}
      >
        <p style={barPara}>{item}</p>
      </div>
    ));
  }
}
