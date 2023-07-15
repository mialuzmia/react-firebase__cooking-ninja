import { useEffect, useRef, useState} from 'react'
import {  useNavigate } from 'react-router-dom'

import './create.css'

import useFetch from '../../hooks/useFetch';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientsInput = useRef(null)
  const navigate = useNavigate()


  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')


  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })

    setTitle('')
    setMethod('')
    setCookingTime('')
    setIngredients([])
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if(ing && !ingredients.includes(ing)){
      setIngredients(previngredients => [...previngredients, ing])
    }
    setNewIngredient('')
    ingredientsInput.current.focus
  }

  useEffect(() => {
    if(data){
      navigate('/')
    }
  }, [data]);

  return (
    <div className='create'>
      <h2 className='page-title'></h2>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientsInput}
            />
            <button onClick={handleAdd} className="btn">add</button>
          </div>
          <p>Current ingredients: {ingredients.map(ing => <em key={ing}>{ing},</em>)}</p>
        </label>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input 
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button type='submit' className='btn'>submit</button>

      </form>
    </div>
  )
}

export default Create