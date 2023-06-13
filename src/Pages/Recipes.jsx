import React from 'react'

const Recipes = () => {
    
    const searchApi = `https://api.spoonacular.com/food/search?apiKey=${apiKey}&query=${search}&number=${number}`;


  return (
    <div>Recipes</div>
  )
}

export default Recipes