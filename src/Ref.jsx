import { useRef } from 'react'

export function Input () {
  const InputRef = useRef();

  function focusOnInput() {
    InputRef.current.focus()
  }

  return (
    <>
      SignUp<input ref={InputRef} type="text" />
      <input type="text" />
      <button onClick={focusOnInput}>Submit</button>
    </>
  )
}