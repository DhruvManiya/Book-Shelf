

import classes from './styles/sass/App.module.scss'

import { Route,Routes,Navigate } from 'react-router-dom'

import Home from '../src/pages/homePage'
import Books from '../src/pages/theBooks'
import Comics from '../src/pages/theComic'
import TheNevbar from './components/theNevbar'
import TheFooter from './components/theFooter'



function App() {


  return (
    <>
      <TheNevbar />
        <Routes>
          <Route path='/' element={ <Navigate to='/home' /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/books' element={ <Books /> } />
          <Route path='/comics' element={ <Comics /> } />
        </Routes>

      <TheFooter />

    </>
      
  )
}

export default App
