import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardSong from './components/CardSong'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <CardSong
      title = "Storytime" 
      genero = "Metal sinfonico"
      banda = "Nightwish"
      album = "Imaginaerum"
      fecha = "2011"
      />
      <CardSong
      title = "Flight of Icarus"
      genero = "Heavy metal"
      banda = "Iron Maiden"
      album = "Piece of mind"
      fecha = "1983"
      />
      <div>

      <Button/>
      <Button/>
      </div>
    </div>
  )
}

export default App
