import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import BackDrop from "../BackDrop/BackDrop"

const modal = (props) => {
    return (
        <Aux>
            <div className = {classes.Modal}
            style = {{
                transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? '1' : '0'
            }}
            >
                {props.children}
            </div>
            <BackDrop show = {props.show} close = {props.cancelPurchase}/>
        </Aux>
    )
}

export default modal;