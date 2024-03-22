import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Create from './views/Create'
import Details from './views/Details'
import Update from './views/Update'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Home/>}></Route>
        <Route path='/addJob' element={<Create/>}></Route>
        <Route path='/view/:id' element={<Details/>}></Route>
        <Route path='/edit/:id' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
