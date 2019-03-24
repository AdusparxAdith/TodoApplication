import React from "react";
import Hammer from "react-hammerjs";
import SortBar from "../SortBar";

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
    return (
      <React.Fragment>
        <div>
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

        <div style={{ display: "flex" }}>
          <SortBar
            theme={this.props.theme}
            items={["All", "Completed", "Pending"]}
            showTodos={this.props.showTodos}
          />
        </div>
      </React.Fragment>
    );
  }
}
