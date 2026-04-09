import { useState } from "react"
import sriYantra from "./assets/custom_sri_yantra.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-around">
        <h1 className="text-9xl">Hello World</h1>
        <p>We're just getting started</p>
        <img src={sriYantra}></img>
      </div>
    </>
  )
}

export default App
