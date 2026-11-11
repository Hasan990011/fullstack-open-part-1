
import { useState } from 'react'

// Reusable Button component
const Button = ({ onClick, text, className }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

// Reusable StatisticLine component
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


// Statistics component
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <div className="empty-state">
        <svg
          className="empty-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8
            8.5 8.5 0 0 1-7.6 4.7
            8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7
            a8.38 8.38 0 0 1-.9-3.8
            8.5 8.5 0 0 1 4.7-7.6
            8.38 8.38 0 0 1 3.8-.9h.5
            a8.48 8.48 0 0 1 8 8v.5z"
          />
        </svg>

        <h3>No feedback given</h3>
        <p>Statistics will appear after the first feedback.</p>
      </div>
    )
  }

  const average = (good - bad) / total
  const positive = (good / total) * 100


  return (
    <div>
      <h2>Statistics</h2>

      <table className="statistics-table">
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine
            text="Positive"
            value={`${positive.toFixed(1)} %`}
          />
        </tbody>
      </table>
    </div>
  )

}

// Main App component
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Unicafe</h1>

      <h2>Give feedback</h2>

      <div className="feedback-buttons">

        <Button
          className="feedback-button good"
          onClick={() => setGood(good + 1)}
          text="😊 Good"
        />

        <Button
          className="feedback-button neutral"
          onClick={() => setNeutral(neutral + 1)}
          text="😐 Neutral"
        />

        <Button
          className="feedback-button bad"
          onClick={() => setBad(bad + 1)}
          text="😞 Bad"
        />

      </div>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />

    </div>
  )
}

export default App
