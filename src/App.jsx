import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Characters from './pages/Characters'
function App() {
  return (
    <HashRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characters' element={<Characters/>}/>
      </Routes>
      </div>
    </HashRouter>
  )
}

export default App
