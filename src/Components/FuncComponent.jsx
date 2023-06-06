import { useState, useEffect } from 'react'

const FuncComponent = () => {
    console.log('Funcion: Se ejecuta esta primera parte')
    const [user, setUser] = useState({
        name: 'Roman',
        age: 41
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('Funcion: Se montó el componente')

        return () => {
            console.log('Funcion: Se desmontó el componente')
            setUser({
                name: 'Roman',
                age: 41
            })
        }
    }, [])

    useEffect(() => {
        console.log('Función: se actualizó el estado user')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [user])

  return (
    <div>
        {loading ? 'Cargando...' : 
        
        <>
            {console.log('Funcion: Se ejecutó el render')}
            <h1>Componente de función</h1>
            <h2>{user.name}</h2>
            <button
                onClick={() => setUser({...user, name: 'Matteo'})}
            >Cambiar el nombre</button>
        </>
        }
         
    </div>
  )
}

export default FuncComponent