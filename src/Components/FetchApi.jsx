import { useState, useEffect } from 'react'

const FetchApi = () => {
    const [perrito, setPerrito] = useState({
        message: '',
        success: ''
    })
    const [counter, setCounter] = useState(0)
    const url = 'https://dog.ceo/api/breeds/image/random'
    console.log(perrito)
    
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
              console.log(data)
              setPerrito(data)
          })
    }, [counter])

  return (
    <div>
        <img style={{objectFit: 'cover', width: '400px', height: '400px'}} src={perrito.message} alt="" />
        <button
            onClick={() => setCounter(counter + 1)}
        >Cambiar perrito</button>
        <h4>Cantidad de veces que se cambió el perrito: {counter}</h4>
    </div>
  )
}

export default FetchApi