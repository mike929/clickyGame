import React from "react";
import "./style.css";

function GameCard(props) {
  return (
    <div className="card">
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
          <li>
            {/* <strong>Occupation:</strong> {props.occupation} */}
          </li>
          <li>
            {/* <strong>Location:</strong> {props.location} */}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        
      </span>
    </div>
  );
}

export default GameCard;
