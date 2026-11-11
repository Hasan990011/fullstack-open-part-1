
import { useState } from 'react'
import './App.css'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent accounts for the other 90 percent.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const App = () => {
  const [selected, setSelected] = useState(0)

  // Each anecdote has its own vote count
  const [votes, setVotes] = useState(
    Array(anecdotes.length).fill(0)
  )

  // Select a random anecdote
  const nextAnecdote = () => {
    const randomIndex = Math.floor(
      Math.random() * anecdotes.length
    )

    setSelected(randomIndex)
  }

  // Add one vote to the currently selected anecdote
  const vote = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  const mostVotes = Math.max(...votes)
  const mostVoted = votes.indexOf(mostVotes)

  return (
    <div className="app-container">

      <h1>Anecdotes</h1>

      <p className="subtitle">
        A WISDOM PROGRAMMING by Sheikh Hasan
      </p>

      <div className="anecdote">
        <p className="quote">
          "{anecdotes[selected]}"
        </p>

        <p className="votes">
          Has {votes[selected]} {votes[selected] === 1 ? 'vote' : 'votes'}
        </p>
      </div>

      <p className="description">
        Software engineering wisdom — {anecdotes.length} anecdotes
      </p>

      <div className="controls">
        <button
          className="vote-button"
          onClick={vote}
        >
          Vote
        </button>

        <button
          className="next-button"
          onClick={nextAnecdote}
        >
          Next anecdote
        </button>
      </div>

      <div className="most-voted">
        <h2>Anecdote with the most votes</h2>

        <p>
          {anecdotes[mostVoted]}
        </p>

        <p>
          Has {mostVotes} {mostVotes === 1 ? 'vote' : 'votes'}
        </p>
      </div>

    </div>
  )
}

export default App
