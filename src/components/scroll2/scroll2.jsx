import React, { useState, useEffect } from "react";
import { ScrollTo } from "react-scroll-to";
import MovingArrow from "../movingArrow/movingArrow";


function Scroll2() {
const [isVisible, setIsVisible] = useState(true);
const [height, setHeight] = useState(0)

useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 900;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };
    return (
      <div id="container">
          {
              isVisible 
              && 
          <div id="hide">
                <ScrollTo>
                  {({ scroll }) => (
                    <a onClick={() => scroll({  y: 1700, smooth: true })}><MovingArrow/></a>
                  )}
                </ScrollTo>  
          </div>
          }
      </div>
    )
  }
export default Scroll2;