import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'
import { routes } from './utils/routes'
import Recipes from './Pages/Recipes'
import Detail from './Pages/Detail'
import Layout from './Layout/Layout'
import ParentComponent from './Clase 18/ParentComponent'
import LoboEstepario from './Clase 18/LoboEstepario'
import { useState } from 'react'
import ChildComponent from './Clase 18/ChildComponent'

function App() {

  const [salario, setSalario] = useState(150000)

  return (
    <>
      <ParentComponent salario={salario}/>
      <LoboEstepario salario={salario}/>

      {/* <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.contact} element={<Contact/>}/> 
          <Route path={routes.about} element={<About/>}/>
          <Route path={routes.recipes} element={<Recipes/>}/>
          <Route path={routes.detail} element={<Detail/>}/>
          <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
        </Route>
      </Routes> */}
    </>
  )
}

export default App
