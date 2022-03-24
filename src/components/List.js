import React from "react"
//  import './App.css';

export const List = ({ ships }) => {
  console.log(ships)
    return (
      <div className="starship">
        <h1>STARWARS STARSHIPS</h1>
        <ul>
          {ships.map(ship => {
            return <li key={ship.name}>{ship.name}</li>
          })}
        </ul>
      </div> 
    )
  }
