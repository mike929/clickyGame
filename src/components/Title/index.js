import React, { Component } from "react";
import "../Title/title.css";

class Title extends Component {
    render() {
        return (
            <div className="title">
                <h1>Super Hero clicky game</h1>
                <p>Click on an image to earn points. Game ends if you select an image twice!</p>
            </div>
        )
    }
}
export default Title;





// import React from "react";
// import "./style.css";

// function Title(props) {
//   return <h1 className="title">{props.children}</h1>;
// }

// export default Title;
