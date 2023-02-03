import MovingText from 'react-moving-text'
 
const MyMovingText = () => {
  return (
    <MovingText
      type="typewriter"
      duration="5000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none"
      dataText={[
        'Добро Пожаловать!',
        'Welcome to my site!',
        'Willkommen zurück!'
        ]} 
      >          
    </MovingText>
  )
}

export default MyMovingText;