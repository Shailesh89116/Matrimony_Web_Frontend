import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './pages/home/Landing'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
