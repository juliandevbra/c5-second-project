import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'
import { routes } from '../utils/routes'


const Navbar = () => {
  const {setSearch} = useRecipeStates()
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    window.location.reload()
  }

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
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar