import React from "react";
import ThemeBar from "../ThemeBar";
import Hammer from "react-hammerjs";
export default class Footer extends React.Component {
  handleSwipe = event => {
    if (event.direction === 4) {
      this.props.toggleScreen("left");
    } else if (event.direction === 2) {
      this.props.toggleScreen("right");
    }
  };
  render() {
    const themeArr = require("../../resources/themes");

    return (
      <Hammer
        onDoubleTap={this.secretCSS}
        onSwipe={this.handleSwipe}
        direction="DIRECTION_ALL"
      >
        <div className="footer" style={footerStyle}>
          <ThemeBar themeArr={themeArr} changeTheme={this.props.changeTheme} />
          <p>
            ~Made with love, by{" "}
            <span style={{ color: this.props.theme.background }}>Adusparx</span>{" "}
            ~ v5.1
          </p>
        </div>
      </Hammer>
    );
  }
}
const footerStyle = {
  clear: "both",
  position: "absolute",
  textAlign: "center",
  height: "100%",
  right: "0",
  marginTop: "10px",
  left: "0"
};
