import './App.css';


const Header = (props) => {
    return (

      <div>
          <h1>{props.name}</h1>
      </div>
    )
}

function Content (props){

  // Extract the info : 

  const name1 = props.parts[0].name
  const name2 = props.parts[1].name
  const name3 = props.parts[2].name
  const ex1 = props.parts[0].exercises
  const ex2 = props.parts[1].exercises
  const ex3 = props.parts[2].exercises


  return (

    <>
        <Part name = {name1} exercises = {ex1}/>
        <Part name = {name2} exercises = {ex2}/>
        <Part name = {name3} exercises = {ex3}/>


    </>
  )
}

const Part = (props) => (<p>{props.name} {props.exercises}</p>)


const Total = (props) => {

  
    const message = "The total number of exercises are :"
    const ex1 = props.parts[0].exercises
    const ex2 = props.parts[1].exercises
    const ex3 = props.parts[2].exercises

    return message + (ex1 + ex2 + ex3)
}

function App() {

  const course = {

    name : "Half Stack application development",
    parts : [
      {
          name : "Fundamentals of React" ,
          exercises : 10} ,
      {
          name : "Usingprops to pass data" ,
          exercises : 7},
      {
          name : "State of a component" ,
          exercises :14
      }]
  }

  return (

    <div>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>


  )
}

export default App;
