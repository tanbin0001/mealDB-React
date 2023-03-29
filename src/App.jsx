import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meals from './Components/Meals/Meals'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header></Header>
      <Meals></Meals>
    </div>
  )
}

export default App
