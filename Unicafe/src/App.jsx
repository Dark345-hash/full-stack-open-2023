import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = ({ text, value }) => (
<tr>
<td>{text}</td> 
<td>{value}</td>
</tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const avgOfAll = (good - bad) / all;
  const positiveFeedback = (good / all) * 100;

  if (all >= 1) {
    return (
      <>

        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="Average" value={avgOfAll} />
        <StatisticsLine text="positive reviews " value={positiveFeedback} />

      </>
    )
  } else {
    return (
      <>
        <h1>Statistics not found</h1>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


export default App