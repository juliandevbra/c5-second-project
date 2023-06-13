import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    const [char, setChar] = useState({})
    const params = useParams()
    console.log(params)

    const url = 'https://rickandmortyapi.com/api/character/' + params.id

    useEffect(() => {
        axios(url)
        .then(res => setChar(res.data))
    }, [])

  return (
    <div>
        <h3>Info traida de params: {params.id}</h3>
        <h3>Info traida de la api: {char.id}</h3>
        <h1>{char.name}</h1>
        <img src={char.image} alt="" />
    </div>
  )
}

export default Character