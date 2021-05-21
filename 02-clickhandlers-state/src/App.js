import React, { useState } from 'react'
import './App.css';


const Statistic = ({text , value }) => <p>{text} : {value}</p>
const Button = ({text , onClickMethod}) => <button onClick = {onClickMethod}>{text}</button>

const Statistics = ({good, neutral , bad}) => { 
  const allReviews = good + neutral + bad
  const averageScore = ((good - bad) / allReviews).toFixed(2)
  const positivityPercentage = ((good / allReviews).toFixed(2)* 100) + "%"

  if (allReviews === 0) { 

    return (<p>No Feedback Given</p>)
  }

  else {
    return (
      <div>
        <h2>Statistics</h2>
        <Statistic text = "Good" value = {good}/>
        <Statistic text = "Neutral" value = {neutral}/>
        <Statistic text = "Bad" value = {bad}/>
        <Statistic text = "Total Reviews" value = {allReviews}/>
        <Statistic text = "Average" value = {averageScore}/>
        <Statistic text = "Positive Percentage" value = {positivityPercentage}/>
      </div>
    )
  }
}

const App = () => {

  // State for the clickHandlers
  const [good , setGood] = useState(0)
  const [neutral , setNeutral] = useState(0)
  const [bad , setBad] = useState(0)

  
  const clickHandlerGood = () =>  setGood(good + 1)
  const clickHandlerNeutral = () => setNeutral(neutral + 1)
  const clickHandlerBad = () => setBad(bad + 1)

  return (

    <>
    <div>

      <h2>give feedback</h2>
      <Button onClickMethod = {clickHandlerGood} text = "Good"></Button>
      <Button onClickMethod = {clickHandlerNeutral} text = "Neutral"></Button>
      <Button onClickMethod = {clickHandlerBad} text = "Bad"></Button>
    </div>

    <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </>
  )

}
export default App;
