

import classes from './styles/sass/App.module.scss'

import { Route,Routes } from 'react-router-dom'

import Home from '../src/pages/theBooks'
import Comics from '../src/pages/theComic'
import TheNevbar from './components/theNevbar'

function App() {


  return (
    <>
      <TheNevbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/comics' element={ <Comics /> } />


        </Routes>

    </>
      
  )
}

export default App
