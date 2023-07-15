import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Navbar from './components/navbar/Navbar'



const Router = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />}/>
            <Route path='/recipes/:id' element={<Recipe />}/>
            <Route path='/search' element={<Search/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router