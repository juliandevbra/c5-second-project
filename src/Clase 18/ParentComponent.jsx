import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <div className='parent'>
        <h1>ParentComponent</h1>
        <ChildComponent />
        {console.log('Se renderizó el padre')}
    </div>
  )
}

export default ParentComponent