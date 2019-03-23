import React from "react";
import ThemeBar from "../ThemeBar";
const url = require("C:/Users/Adusparx/Desktop/React Projects/src/resources/logo.png");

export default class Header extends React.Component {
  // state={
  //     display: 'visible'
  // }

  // toggleBar = () =>{
  //     this.setState({display:'none'})
  // }

  getStyle = () => {
    const { background, color } = this.props.theme;
    return {
      background,
      color,
      textAlign: "center",
      padding: "10px",
      cursor: "pointer",
      transition: "0.9s"
    };
  };

  render() {
    const width = window.screen.width;
    const height = window.screen.width;
    console.log(width, height);
    const themeArr = require("../../resources/themes");
    return (
      <div>
        <div className="themeBar" style={themeBarStyle}>
          <ThemeBar themeArr={themeArr} changeTheme={this.props.changeTheme} />
        </div>
        <header style={this.getStyle()}>
          <h1>TodoList</h1>
        </header>
        <img src={url} width="30px" />
      </div>
    );
  }
}

const themeBarStyle = {
  textAlign: "center",
  fontStyle: "oblique",
  position: "absolute",
  bottom: "50px",
  right: "0",
  left: "0"
};
