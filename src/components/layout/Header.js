import React from "react";
import ThemeBar from "../ThemeBar";
import Hammer from "react-hammerjs";
const url = require("C:/Users/Adusparx/Desktop/React Projects/src/resources/logo.png");

export default class Header extends React.Component {
  state = {
    secret: false
  };

  secretCSS = () => {
    this.setState(prevState => ({
      secret: !prevState.secret
    }));
  };

  getHeaderStyle = () => {
    const { background, color } = this.props.theme;
    return {
      background,
      color,
      textAlign: "center",
      padding: "10px",
      cursor: "pointer",
      transition: "all 0.9s"
    };
  };

  render() {
    const themeArr = require("../../resources/themes");
    return (
      <div>
        <div className="themeBar" style={themeBarStyle}>
          <ThemeBar themeArr={themeArr} changeTheme={this.props.changeTheme} />
        </div>
        <Hammer onDoubleTap={this.secretCSS}>
          <header
            className={this.state.secret ? "secretGlow" : "secretGlowR"}
            style={this.getHeaderStyle()}
          >
            <h1>
              Todo<span id={this.state.secret ? "spanClass" : ""}>L</span>ist
            </h1>
          </header>
        </Hammer>
        <img
          className={this.state.secret ? "imgShake" : ""}
          src={url}
          alt="Failed to load"
          width="30px"
        />
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
