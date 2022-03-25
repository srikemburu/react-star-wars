import React from "react"
import '../app.css';

export default function List(props) {
  console.log("props: ", props)

    return (    
       <div className="starship-card">          
           <p>{props.ship.name}</p>
      </div> 
    )
  }
