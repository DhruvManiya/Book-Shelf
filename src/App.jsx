
import classes from './styles/sass/App.module.scss'

import { Route,Routes,Navigate } from 'react-router-dom'

import Home from '../src/pages/homePage'
import Books from '../src/pages/theBooks'
import Magazines from './pages/theMagazines'
import TheNevbar from './ui/theNevbar'
import TheFooter from './ui/theFooter'
import Magazinepage from './pages/magazinePage'
import Bookpage from './pages/bookPage'


function App() {
  return (
    <>
      <TheNevbar />
        <Routes>
          <Route path='/' element={ <Navigate to='/home' /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/books' element={ <Books /> } />
          <Route path='/books/:id' element={ <Bookpage /> } />
          <Route path='/magazines' element={ <Magazines /> } />
          <Route path='/magazines/:id' element={ <Magazinepage /> } />
        </Routes>

      <TheFooter />

    </>
      
  )
}

export default App
