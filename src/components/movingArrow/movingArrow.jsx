import MovingComponent from 'react-moving-text'
import style from "./movingArrow.module.css"
import { AiOutlineArrowDown } from "react-icons/ai";

const MovingArrow = () => {
    return (
        <MovingComponent
        type="shakeMix"
        duration="4000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none">
        <span href=""><AiOutlineArrowDown/></span>
      </MovingComponent>
    )
  }

export default MovingArrow;