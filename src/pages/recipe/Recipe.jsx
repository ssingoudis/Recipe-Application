import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

// styles
import './Recipe.css'

export default function Receipe() {

  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div className='recipe'>
      {isPending && <p className='loading'>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>{recipe.cookingTime}</p>
          <p>
            <ul>
              {recipe.ingredients.map((ing) => (
                <li key={ing}>
                  {ing}
                </li>
              ))}
            </ul>
          </p>
          <p className='method'>{recipe.method.map((step) => (
            <li key={step}>{step}</li>
          ))}</p>
        </>
      )}
    </div>
  )
}
