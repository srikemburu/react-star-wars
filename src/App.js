
import React from 'react'
import { List } from "./components/List"
import { fetchData } from "./services/Sw-api"
import { useState } from "react"
import { useEffect } from "react"
// import './App.css';


function App() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    fetchData().then(response => setShips(response.results))
  },[])
  console.log(ships)
  return (
    <div>
      <List ships={ships} />
    </div>
  )
}

export default App;