import React from "react";
import ThemeItem from "./ThemeItem";

export default class ThemeBar extends React.Component {
  render() {
    return this.props.themeArr.map(theme => (
      <ThemeItem
        key={theme.id}
        theme={theme}
        changeTheme={this.props.changeTheme}
      />
    ));
  }
}
