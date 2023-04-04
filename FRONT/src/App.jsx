import { useState } from 'react'
import './App.css'
import Login from './Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-5xl font-bold underline">Photopets</h1>
      <Login />
    </div>
  );
}

export default App
