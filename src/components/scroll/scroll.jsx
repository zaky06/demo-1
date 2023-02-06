import React, { Component } from "react";
import { ScrollTo } from "react-scroll-to";
import MovingArrow from "../movingArrow/movingArrow";

export default class MyComponent extends Component {
  render() {
    return (
      <ScrollTo>
        {({ scroll }) => (
          <a onClick={() => scroll({  y: 900, smooth: true })}><MovingArrow/></a>
        )}
      </ScrollTo>
    );
  }
}