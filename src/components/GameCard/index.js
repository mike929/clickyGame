import React from "react";
import "./style.css";



function GameCard(props) {
  return (
    <div className="card">
    <div className="card" onClick={() => props.selectedImage(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <center>
            <strong>Name:</strong> {props.name}
            </center>
          </li> 
          </ul>
        </div>
      </div>
      </div>
  
    
  );
}

export default GameCard;
