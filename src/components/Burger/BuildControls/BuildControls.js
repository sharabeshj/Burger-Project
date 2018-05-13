import React from 'react';
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl"

const controls = [
    { label : "Salad",type : "salad"},
    { label : "Bacon",type : "bacon"},
    { label : "Meat",type : "meat"},
    { label : "Cheese",type : "cheese"}
]

const buildControls = (props) => {
    return (
        <div className = {classes.BuildControls}>
            <p>Current price : <strong>{props.price}</strong></p>
            {controls.map(ctrl => <BuildControl key = {ctrl.label} label = {ctrl.label} added = {() => props.ingredientAdded(ctrl.type)} removed = {() => props.ingredientRemoved(ctrl.type)} disabled = {props.disabled[ctrl.type]}/>)}
            <button className = {classes.OrderButton} disabled = {!props.purchaseable} onClick = {props.clickAction}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;