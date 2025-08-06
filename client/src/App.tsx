

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './screens/landing'
import { Game } from './screens/game'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/game' element={<Game />} />

      </Routes>
      <button className='bg-red-200'>JOIN ROOM</button>
    </>
  )
}

export default App
