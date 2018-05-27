import React from 'react'; 
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <div className = {classes.NavigationItem}>
        <a href = { props.link } className = { props.active ? classes.active : null}>{ props.children }</a>
    </div>
);

export default navigationItem;