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
import { Auth } from './utils/Auth'
import Login from './Pages/Login'
import Counter from './Clase 19/Counter'
import UserList from './Clase 19/UserList'

function App() {

  return (
    <>
      <Counter/>
      <UserList/>
      {/* <Routes>
        {Auth() ? 
        <>
          <Route path='/' element={<Layout/>}>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/> 
            <Route path={routes.about} element={<About/>}/>
            <Route path={routes.recipes} element={<Recipes/>}/>
            <Route path={routes.detail} element={<Detail/>}/>
            <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
          </Route>
        </>
        :
        <Route path='/' element={<Login/>}/>
        }
      </Routes> */}
    </>
  )
}

export default App
