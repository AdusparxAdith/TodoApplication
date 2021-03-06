import React from "react";
// import Hammer from "react-hammerjs";
import SortBar from "../SortBar";

const url = require("C:/Users/Adusparx/Desktop/React Projects/src/resources/images/logo.png");

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

  // handleSwipe = event => {
  //   if (event.direction === 4) {
  //     this.props.toggleScreen("left");
  //   } else if (event.direction === 2) {
  //     this.props.toggleScreen("right");
  //   }
  // };

  render() {
    return (
      <React.Fragment>
        <div>
          {/* <Hammer
            onDoubleTap={this.secretCSS}
            onSwipe={this.handleSwipe}
            direction="DIRECTION_ALL"
          > */}
          <header
            className={this.state.secret ? "secretGlow" : "secretGlowR"}
            style={this.getHeaderStyle()}
          >
            <h1>
              Todo<span id={this.state.secret ? "spanClass" : ""}>L</span>ist
            </h1>
          </header>
          {/* </Hammer> */}
          <img
            className={this.state.secret ? "imgShake headImg" : "headImg"}
            src={url}
            alt="Failed to load"
            width="30px"
          />
        </div>

        <div style={{ display: "flex" }}>
          <SortBar
            index={this.props.index}
            theme={this.props.theme}
            items={["All", "Completed", "Pending"]}
            showTodos={this.props.showTodos}
          />
        </div>
      </React.Fragment>
    );
  }
}
