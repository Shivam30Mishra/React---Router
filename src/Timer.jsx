import { useState, useRef } from 'react';

export function Timer() {
  const [currentCount, setCount] = useState(0);
  const timerRef = useRef(null);

  function StartClock() {
    if (timerRef.current !== null) return; // prevent multiple intervals

    timerRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  }

  function StopClock() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  return (
    <>
      {currentCount}
      <button onClick={StartClock}>Start</button>
      <button onClick={StopClock}>Stop</button>
    </>
  );
}


// export function Timer() {
//   const [ currentCount, setCount ] = useState(0);
//   let timer = 0;

//   function StartClock(){
//     timer = setInterval(function() {
//       setCount(c => c+1)
//     },5000); // setInterval returns a value that is what the count
//   }

//   function StopClock(){
//     console.log(timer);
//     clearInterval(timer);
//   }

//   return (
//     <>
//       { currentCount }
//       <button onClick={StartClock}>Start</button>
//       <button onClick={StopClock}>Stop</button>
//     </>
//   )
// }