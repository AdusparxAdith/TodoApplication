import React from "react";
import ThemeBar from "../ThemeBar";
import Hammer from "react-hammerjs";

export default class Footer extends React.Component {
  state = {
    visibility: true
  };
  render() {
    console.log(this.props);
    const themeArr = require("../../resources/themes");
    const ThemeBarStyle = {
      display: this.state.visibility ? "block" : "none",
      marginTop: "10px",
      marginBottom: "10px",
      clear: "both",
      margin: "0",
      position: "fixed",
      textAlign: "center",
      bottom: "55px",
      right: "0",
      left: "0"
    };
    return (
      <Hammer
        onDoubleTap={() =>
          this.setState({ visibility: !this.state.visibility })
        }
      >
        <div>
          <div style={ThemeBarStyle}>
            <ThemeBar
              themeArr={themeArr}
              changeTheme={this.props.changeTheme}
            />
          </div>
          <div className="footer" style={footerStyle}>
            <p>
              <span style={{ color: this.props.theme.background }}>
                Double tap
              </span>{" "}
              to toggle Themebar
            </p>
            <p>~Made with love, by Adusparx ~ v2.0</p>
          </div>
        </div>
      </Hammer>
    );
  }
}
const footerStyle = {
  clear: "both",
  margin: "0",
  position: "fixed",
  textAlign: "center",
  height: "40px",
  bottom: "10px",
  right: "0",
  left: "0"
};
