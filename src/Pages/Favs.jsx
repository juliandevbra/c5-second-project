import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'

const Favs = () => {

    const {state} = useRecipeStates()

  return (
    <div>
        {state.map(fav => <Link to={'/detalle/' + fav.id} key={fav.id}>
          <li>{fav.title}</li>
        </Link>)}
    </div>
  )
}

export default Favs