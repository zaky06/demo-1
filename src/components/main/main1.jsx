import React, { Component } from "react";
import { ScrollTo } from "react-scroll-to";
import Block1 from "../block1/block1";
import Block2 from "../block2/block2";
import Block3 from "../block3/block3";
import style from "./main.module.css"

export default class MyComponent extends Component {
  render() {
    return (
        <main>
              <Block1/>
              <ScrollTo>
                {({ scroll }) => (
                  <a onClick={() => scroll({ y: {id: 'foo'}})}>Scroll to Bottom</a>
                )}
              </ScrollTo>
              <Block2 id='foo'/>
              <Block3/>
        </main>
      
    );
  }
}