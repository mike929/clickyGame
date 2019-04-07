import React from "react";
import "../Navbar/Navbar.css";
import "../Title"

const Navbar = props => (
    <div className="navbar sticky-top">
        <a className="navbar-brand" href="/React-Clicky-Game/">Clicky Game</a>
        <li>Click on an image to earn points! Don't click images twice!</li>
        <li className="score">Score: {props.score} | High Score: {props.highScore}</li>
    </div>
)
 

export default Navbar;