import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Timer from "./components/Timer/Timer";
import { useState } from "react";
import { useEffect } from "react";


const App = () => {


  const [ time, setTime ] = useState(0);
  const [ timerOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
        interval = setInterval(()  => {
            setTime(prevTime => prevTime + 10)
        }, 10)
    } else {
        clearInterval(interval)
    }
    return () => clearInterval(interval)
}, [timerOn])

  return (
    <Container>
    <Timer time={time}></Timer>
    <Button onClick={() => setTimeOn(true)}>START</Button>
    <Button onClick={() => setTimeOn(false)}>STOP</Button>
    <Button onClick={() => setTime(0)}>RESET</Button>
    </Container>
  );

};

export default App;