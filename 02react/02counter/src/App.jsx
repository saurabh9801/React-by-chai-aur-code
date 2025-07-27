import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Couner Value : 5</h2>
     <div class="flex flex-row p-5 gap-[30px]">
      <button>Add value</button>
      <button>Remove Value</button>
     </div>
      
    </>
  )
}

export default App
