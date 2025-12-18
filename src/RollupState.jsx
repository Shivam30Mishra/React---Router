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
      {/* bulbon is prop to the BulbState component */}
      {/* similarly bulbon and ToggleBulbState is prop to the ToggleBulbState */}
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
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