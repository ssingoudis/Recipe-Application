import { Link } from 'react-router-dom'

// styles
import './RecipeList.css'

export default function RecipeList({ recipes }) {

if (recipes.length === 0) {
  return <div className='error'>No Recipes to load...</div>
}

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className='card'>
        <h3>{recipe.title}</h3>
        <p>It takes {recipe.cookingTime}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <div>instructions: {recipe.method.substring(0,70)}...</div>
        <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  )
   
}