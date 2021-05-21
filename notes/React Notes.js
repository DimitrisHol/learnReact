Εχεις ενα root object πανω στο οποιο χτιζεις τα αντικειμενα που θες. 

Το αρχειο το οποιο φτιαχνει την σελιδα σου ειναι : 


import React from 'react'

// δηλωνεις οτι θα εχω παραμετρους props, και για να παρεις τις τιμες 
const Hello = (props) {


  return (

    <div>

    // τα παιρνεις με props.<parameter>
    // προφανως και δεν υπαρχει strong type. See TypeScript
      <h1> Greetings , {props.name}</h1>
    <div/>

    )
}


const App = () => {


  return (

    // Βαζεις αυτες τις μαλακιες γιατι συνηθως πολλα components απλα κανουν 
    // render τα children τους. 
    <>

      // Μπορεις να καλεις αλλα components με παραμετρους, περνοντας στα ως 
      // properties
      <Hello name = :Demetres/>
      //Μπορεις να βαλεις και απλη HTML (Ουσιαστικα δουλευουμε με JSX, κατι αναμεσα)
      // σε HTML και Javascript.


    </>


    )
}



// Destucturing 


// First Idea
const Hello (props) {
  const name = props.name
  const age = props.age

}

// Second Idea 
const Hello (props) {

  const {name , age} = props
}

// Final Implementation : Directly on the parameters
const Hello = ({name , age}) => {

  const ageGuesser = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old </p>
      <p>You are probably born around : {ageGuesser()}</p>
    </div>)
}

function App() {
  const Person = {
    name: "Demetres",
    age: 23
  }
  return (<Hello name={Person.name} age={Person.age} />)
}

export default App;

// State : 

// You create the variable that you want to change (state), and a method
// that changes that value, and you set them as the state.
// Then when you want to change the state, you simply call that function
function App (){

  const = [counter , setCounter] = useState(0)
  <div> 
    <p>{counter}<p/>
    <button onClick = () => setCounter(counter +1) 
  <div/>
}


// After some destructing and some prettifing : 
const Display = ({counter}) => <div>{counter}</div>
const Button = ({handleClick , text}) => <button onClick={handleClick}>{text}</button>

function App() {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const resetToZero = () => setCounter(0)

  return (
    <>

      <Display counter={counter} />

      <Button text="Increase" handleClick={increaseByOne} />
      <Button text="Decrease" handleClick={decreaseByOne} />
      <Button text="Reset to Zero" handleClick={resetToZero} />
    </>
  )
}


// Now what if we want to use an object for the state 
// This turns to :

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)


// This : 

  const [clicks , setClicks]  useState({

    left : 0 , right : 0
  })

  // The clickHandlers do all the job to changing the state

  const handleLeftClick = () => {

    // Create a new object to hold the new state.
    const newClicks = {

      left : clicks.left + 1,
      right : clicks.right
    }
    setClicks(newClicks)
  }

  // The left click counter is incremented by one, but the right counter
  // stays the same as it was in the previous state.


  // If you want to make things a bit more cute

const handleLeftClick = () => {

  const newClicks = {

    ...clicks , 
    left : clicks.left + 1
  }
}

// You shouldn't mutate state directly, you need to make a new object, 
// and assign it to the new state. Properties from the previous state
// should be just copied over. 


const handleRightClick = () => {

  setClicks({...clicks , right : clicks.right + 1})
}

// Handling arrays : 


// We want to have a log if the user clicked left or right, so we create 
// a new entry to the state


const [allClicks , setClicks] = useState([])


const handleLeftClick = () => {


  setClicks({...clicks , left : clicks.left + 1})
  setAll(allClicks.concat("L"))
}

// Pay attention that concat returns a new array, so that we are not mutating
// the exisitn array but rather we are creating a new one ! 


// Of course you can use if statements to conditionally render components

const History = (props) =>{


  // At the start it will show the message, 
  if (props.AllClicks.length === 0 ){

    return (<div>press the buttons to show history.</div>)
  }

  // otherwise it will render the history
  return (
    <div>{props.AllClicks.join(" ")}

  )
}


const App() => {

  ...
<History allClicks = {allClicks}/>

}
