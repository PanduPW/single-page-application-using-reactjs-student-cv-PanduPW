import { useState } from 'react'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experiences from './components/Experiences'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="max-w-2xl mx-auto mt-10 bg-white shadow-xl rounded-xl overflow-hidden">
    <Profile />
    <Skills />
    <Experiences />
    </div>
  );
}

export default App
