import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        userName: '',
        password: ''
    })

    const login = () => {
        localStorage.setItem('user', JSON.stringify(user))
        window.location.reload()
    }

    return (
    <div>
        <h3>Debe ingresar para poder visualizar la página</h3>
        <input type="text" onChange={(e) => setUser({...user, userName: e.target.value})}/>
        <input type="password" onChange={(e) => setUser({...user, password: e.target.value})}/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login