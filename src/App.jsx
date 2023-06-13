import './App.css'
import RickAndMorty from './Pages/RickAndMorty'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'
import { routes } from './utils/routes'
import Character from './Pages/Character'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path={routes.characters} element={<RickAndMorty/>}/>
        <Route path={routes.singleCharacter} element={<Character/>}/>
        {/* <Route path='/personaje/:id' element={<Character/>}/>  Lo mismo que linea 23*/}
        <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
