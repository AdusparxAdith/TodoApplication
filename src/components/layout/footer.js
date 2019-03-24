import React from "react";
import ThemeBar from "../ThemeBar";
import Hammer from "react-hammerjs";

export default class Footer extends React.Component {
  render() {
    console.log(this.props);
    const themeArr = require("../../resources/themes");
    const ThemeBarStyle = {
      marginTop: "10px",
      marginBottom: "10px",
      clear: "both",
      margin: "0",
      position: "absolute",
      textAlign: "center",
      bottom: "55px",
      right: "0",
      left: "0"
    };
    return (
      <div className="footer" style={footerStyle}>
        <ThemeBar themeArr={themeArr} changeTheme={this.props.changeTheme} />
        <p>
          ~Made with love, by{" "}
          <span style={{ color: this.props.theme.background }}>Adusparx</span> ~
          v3.0
        </p>
      </div>
    );
  }
}
const footerStyle = {
  clear: "both",
  position: "absolute",
  textAlign: "center",
  height: "40px",
  right: "0",
  marginTop: "10px",
  left: "0"
};
