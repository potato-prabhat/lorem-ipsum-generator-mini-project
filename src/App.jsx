import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const newText = data.slice(0, parseInt(count))
    setText(newText)
  }
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <div>
        {text.map((t) => {
          return <p key={nanoid()}>{t}</p>
        })}
      </div>
    </section>
  )
}
export default App
