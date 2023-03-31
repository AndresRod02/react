import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Character from './pages/Character'
import MainLayout from './components/MainLayout'
import ProtectedRoutes from './components/ProtectedRoutes'
function App() {
  return (
    <HashRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/characters/:name' element={<Character/>}/>
        </Route>
      </Routes>
      </div>
    </HashRouter>
  )
}

export default App
