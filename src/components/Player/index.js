import React from "react";
import "./style.css";
export default function Player(props) {
    return (
        <img 
            className={props.indicator}
            src={props.info.image} 
            alt="player"
            onClick={() => props.handleClick(props.info, props.index)}
        />
    );
}