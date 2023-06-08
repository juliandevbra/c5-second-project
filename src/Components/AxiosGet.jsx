import axios from 'axios'
import { useState, useEffect } from 'react'

const AxiosGet = () => {
    const [gatito, setGatito] = useState()
    const url = 'https://api.thecatapi.com/v1/images/search'

    useEffect(() => {
        axios(url).then((res) => setGatito(res.data))
    }, [])
    
    // console.log(gatito[0]?.url)
  return (
    <div>
       {gatito &&  <img src={gatito[0]?.url} alt="" />}
    </div>
  )
}

export default AxiosGet