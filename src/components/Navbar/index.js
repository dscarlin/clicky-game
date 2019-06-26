import React from "react";
import "./style.css";
export default props => (
    <nav>
        <ul>
            <li className="brand"><a href="/">Clicky Game</a></li>
            <li className={props.indicator}>Click to an image to begin!</li>
            <li>
                <div>
                Score: &nbsp; {props.score}
                </div>
                <div>
                Top Score: &nbsp;{props.topScore}
                </div>
            </li>
        </ul>
    </nav>
);
