import React from 'react';
import classes from './DrawerToggle.css'

const drawerToggle = (props) => (
    <div className = {classes.DrawerToggle} onClick =  { props.toggle }>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;