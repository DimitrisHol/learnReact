import React, { useState } from 'react'
import './App.css';


const App = () => {

  // Creating the state for the reviews.

  const [good , setGood] = useState(0)
  const [neutral , setNeutral] = useState(0)
  const [bad , setBad] = useState(0)

  // Statistics State

  const [all , setAll] = useState(0)
  const [average , setAverage] = useState(0)
  const [positive , setPositive] = useState(0)

  const clickHandlerGood = () =>  {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
    setPositive(good / all)
    
  }
  const clickHandlerNeutral = () =>  {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setPositive(good / all)
  }
  const clickHandlerBad = () =>  {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average -1)
    setPositive(good / all)
  }
  


  return (

    <>

    <div>

      <h2>give feedback</h2>
      <button onClick = {clickHandlerGood}>Good</button>
      <button onClick = {clickHandlerNeutral}>Neutral</button>
      <button onClick = {clickHandlerBad}>Bad</button>
    </div>

    <div>
      <h2>Statistics</h2>


      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>

      <p>All Reviews : {all}</p>
      <p>Average  : {(average/all).toFixed(2)}</p>
      <p>Positive Percentage : {(positive * 100).toFixed(2)}%</p>
      


    </div>

    </>

    
  )



}

export default App;
