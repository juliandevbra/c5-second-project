import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'
import { routes } from '../utils/routes'


const Navbar = () => {
  const {setSearch} = useRecipeStates()
  const navigate = useNavigate()

  return (
    <div className='navbar'>
        <div className='links'>
            <h4 onClick={() => navigate(-1)}>↩Back</h4>
            <Link to={routes.home}><h4 className='link'>Home</h4></Link>
            <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
            <Link to={routes.about}><h4 className='link'>About</h4></Link>
            <Link to={routes.recipes}><h4 className='link'>Recetas</h4></Link>
        </div>
        <input type="text" onBlur={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Navbar