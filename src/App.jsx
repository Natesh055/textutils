import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextForm from './components/TextForm'
import Navbar from './components/Navbar'
import About from './components/About'
function App() {
  const [count, setCount] = useState(0)
  const [mode,setMode] = useState('light')
  const toggleMode = ()=>
    {
      if(mode ==='light')
      {
        setMode("dark")
        document.body.style.backgroundColor="#042743";
      }
      else{
        setMode("light")
        document.body.style.backgroundColor="light";
      }
    }
  return (
    <>
     <Navbar heading = "TextUtils" mode={mode} togglemode = {toggleMode}/>
     <div className="container">
        <TextForm heading = "Enter the text to analyse" mode = {mode}/>
     </div>
      {/* <About/> */}
    </>
  )
}

export default App
