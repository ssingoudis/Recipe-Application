import { useState } from 'react'

// styles
import './Create.css'

export default function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime)
  }


  return (
    <div className='create'>
      <h2>create your Recipe!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name of the Meal:</span>
          <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required 
          />
        </label>

                  {/* ingredients */}

        <label>
          <span>Desciption of how-to cook it:</span>
          <input 
            type="text"
            onChange={(e) => {setMethod(e.target.value)}}
            value={method}
            required
          />
        </label>
        <label>
          <span>Enter the Cooking Time in minutes:</span>
          <input 
            type="number"
            onChange={(e) => {setCookingTime(e.target.value)}}
            value={cookingTime}
            required
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
