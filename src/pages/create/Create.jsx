import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Create.css'

export default function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()

  const { data, error, postData } = useFetch('http://localhost:3000/recipes', "POST")

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })

    // setTitle('')
    // setMethod('')
    // setCookingTime('')
    // setIngredients([])
  }

  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data])


  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
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

        <label>
          <span>Add Ingredients</span>
          <div className="ingredients">
            <input 
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={handleAdd}>add</button>
          </div>
        </label>

        <p>current ingredients: {ingredients.map((ingr) => (
          <em>{ingr}, </em>
        ))}</p>

        <label>
          <span>Desciption of how-to cook it:</span>
          <textarea
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
