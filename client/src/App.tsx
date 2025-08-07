

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './screens/landing'
import { Game } from './screens/game'

function App() {


  return (
    <> <div className='min-h-screen bg-stone-700'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/game' element={<Game />} />

      </Routes>
    </div>
    </>
  )
}

export default App
