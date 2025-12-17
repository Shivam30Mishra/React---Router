import { useState } from 'react'

export function RollupState () {
  return (
    <>
      <LightBulb />
    </>
  )
}

function LightBulb () {
  const [ bulbOn, setBulbOn ] = useState(true);

  return (
    <>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </>
  )
}

function BulbState ({bulbOn}) {
  // const [ bulbOn, setBulbOn ] = useState(true); 
  // Roll up the state above

  return (
    <>
    { bulbOn ? "bulb is on" : "bulb is off" }
    </>
  )
}

function ToggleBulbState ({setBulbOn}) {

  function toggle() {
    setBulbOn(currentState => !currentState)
  }

  return (
    <>
      <button onClick={toggle}>Toggle the bulb</button>
    </>
  )
}