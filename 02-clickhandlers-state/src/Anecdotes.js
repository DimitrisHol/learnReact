import React, { useState } from 'react'

const Button = ({ text, onClickMethod }) => <button onClick={onClickMethod}>{text}</button>

const Anecdotes = () => {


    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
      ]


      const [selected , setSelected] = useState(0)
      const getNewJoke = () => setSelected(Math.floor(Math.random() * anecdotes.length))

    return (
        <div>
            {/* <Button onClick = {getNewJoke} text = "Get new joke"/> */}

            <Button onClickMethod = {getNewJoke} text = "Get a new Joke"/>
            <p>{anecdotes[selected]}</p>
        </div>
    )
}

export default Anecdotes;