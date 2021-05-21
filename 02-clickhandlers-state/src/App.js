import React, { useState } from 'react'
import './App.css';


const App = () => {

  const [value , setValue] = useState(0)


  const clickHandlerSetZero = () =>  {

    setValue(value + 1)

    console.log("Click the button" , value , "times.")
  }

  return (

    <div>

    
    <button onClick = {clickHandlerSetZero}>Click This Button</button>
    {value}

    </div>
  )



}

export default App;
