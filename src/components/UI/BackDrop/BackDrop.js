import React from "react";
import classes from "./BackDrop.css";

const backdrop = (props) => {
    return (
        props.show ? <div className = {classes.BackDrop} onClick = {props.close}></div> : null
    );
}

export default backdrop;