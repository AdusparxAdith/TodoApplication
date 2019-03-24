import React from "react";
import ThemeBar from "../ThemeBar";

export default class Footer extends React.Component {
  render() {
    const themeArr = require("../../resources/themes");

    return (
      <div className="footer" style={footerStyle}>
        <ThemeBar themeArr={themeArr} changeTheme={this.props.changeTheme} />
        <p>
          ~Made with love, by{" "}
          <span style={{ color: this.props.theme.background }}>Adusparx</span> ~
          v5.0
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
