import MovingComponent from 'react-moving-text'
import style from "./movingArrow.module.css"

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
        <a href="">Click me!</a>
      </MovingComponent>
    )
  }

export default MovingArrow;