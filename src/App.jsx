
import classes from './styles/sass/App.module.scss'

import { Route,Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>

        <Route path='/' element={ <home /> } />

      </Routes>
    </>
      
  )
}

export default App
