import MovingComponent from 'react-moving-text'

const Letters = ["W", "e", "l", "c", "o", "m", "e", "-", "t", "o", "-", "m", "y", "-", "s", "i", "t", "e",];
const MovingHead = () => {
  return (
    

    Letters.map((letter, index) =>
      <MovingComponent
        type="swing"
        duration="2000ms"
        delay="index * 100ms"
        direction="normal"
        timing="linear"
        iteration="1"
        fillMode="none">
        {letter}
      </MovingComponent>)
  )
}

export default MovingHead;


