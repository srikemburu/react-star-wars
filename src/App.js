
import React from 'react'
import List from "./components/List"
import { fetchData } from "./services/Sw-api"
import { useState } from "react"
import { useEffect } from "react"
import './app.css';


function App() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    fetchData().then(response => setShips(response.results))
  },[])
  console.log(ships)
  return (
    <React.Fragment>
       <h1>STARWARS STARSHIPS</h1>
        <div >
          <ul>             
            {ships.map(ship =>
              <List ship= {ship} />
            )}
          </ul>
        </div>
    </React.Fragment>
  )
}

export default App;