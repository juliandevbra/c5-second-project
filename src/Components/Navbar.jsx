import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <h4 className='link'>Home</h4>
            <h4 className='link'>Contact</h4>
            <h4 className='link'>About</h4>
        </div>
        <input className='search' type="text" />
    </div>
  )
}

export default Navbar