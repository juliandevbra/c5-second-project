import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const RickAndMorty = () => {
    const [personajes, setPersonajes] = useState([])
    const url = 'https://rickandmortyapi.com/api/character'
    useEffect(() => {
        axios(url)
        .then(res => setPersonajes(res.data.results))
    }, [])
    console.log(personajes)
  return (
    <div>
      {personajes.map(personaje => (
        <div key={personaje.id}>
          <h3>{personaje.name}</h3>
          <img src={personaje.image} alt="" />
        </div>
      ))}
    </div>
  )
}

export default RickAndMorty