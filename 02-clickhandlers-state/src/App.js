import React, { useState } from 'react'
import './App.css';


const Statistics = ({good, neutral , bad}) => { 


  const allReviews = good + neutral + bad
  const averageScore = ((good - bad) / allReviews).toFixed(2)
  const positivityPercentage = (good / allReviews).toFixed(2)


  if (allReviews === 0) { 

    return (<p>No Feedback Given</p>)
  }

  else {

    return (

      <div>
        <h2>Statistics</h2>
  
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
  
        <p>All Reviews : {allReviews}</p>
        <p>Average  : {averageScore}</p>
        <p>Positive Percentage : {(positivityPercentage * 100)}%</p>
        
      </div>
    )

  }

  


}







const App = () => {

  // Creating the state for the reviews.

  const [good , setGood] = useState(0)
  const [neutral , setNeutral] = useState(0)
  const [bad , setBad] = useState(0)

  
  const clickHandlerGood = () =>  {
    setGood(good + 1)
  }
  const clickHandlerNeutral = () =>  {
    setNeutral(neutral + 1)
  }
  const clickHandlerBad = () =>  {
    setBad(bad + 1)
  }

  return (

    <>
    <div>

      <h2>give feedback</h2>
      <button onClick = {clickHandlerGood}>Good</button>
      <button onClick = {clickHandlerNeutral}>Neutral</button>
      <button onClick = {clickHandlerBad}>Bad</button>
    </div>

    <Statistics good = {good} neutral = {neutral} bad = {bad} />

    

    </>

    
  )



}

export default App;
