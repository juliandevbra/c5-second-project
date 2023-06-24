import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'

const Detail = () => {
  const [detail, setDetail] = useState({})
  const {dispatch} = useRecipeStates()
  // const {favs, setFavs} = useRecipeStates()
  const params = useParams()
  const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
  const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`

  useEffect(() => {
    axios(url)
    .then(res => setDetail(res.data))
  }, [])

  return (
    <div>
      Detalle n° {params.id}
      <h2>{detail.title}</h2>
      <img src={detail.image} alt="" />
      <button 
          onClick={() => dispatch({type: 'LIKE', payload: detail})}
        // onClick={() => setFavs([...favs, detail])}
      >⭐</button>
    </div>
  )
}

export default Detail