import { useState } from 'react'

function useCounter () {
  const [ count, setCount ] = useState(0);

  function increaseCount() {
    setCount(count => count + 1)
  }

  return {
    increaseCount : increaseCount,
    count : count
  }
}

export function Counter() {
  const { count , increaseCount } = useCounter();
  return (
    <>
      <button onClick={increaseCount}>Increase : {count}</button>
    </>
  )
}
