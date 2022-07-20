
import classes from './styles/sass/App.module.scss'

import { Route,Routes,Navigate } from 'react-router-dom'

import Home from '../src/pages/homePage'
import Books from '../src/pages/theBooks'
import Comics from '../src/pages/theComic'
import TheNevbar from './components/theNevbar'
import TheFooter from './components/theFooter'

const copiright = {
  copy:"something",
  date:"01-01-2020"
}

function App() {

  return (
    <>
      <TheNevbar />
        <Routes>
          <Route path='/' element={ <Navigate to='/home' /> } />
          <Route path='/home' element={ <Home data={copiright}/> } />
          <Route path='/books' element={ <Books /> } />
          <Route path='/comics' element={ <Comics /> } />
        </Routes>

      <TheFooter 
      copiright={copiright.copy}
      date={copiright.date}
      />

    </>
      
  )
}

export default App
