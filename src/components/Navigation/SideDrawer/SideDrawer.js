import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }
    return (
        <Aux>
            <BackDrop className = {classes.BackDrop} show = {props.open} close = { props.close }/>
            <div className = { attachedClasses.join(' ') }>
                <div className = { classes.Logo }><Logo /></div>
                <NavigationItems />
            </div>
        </Aux>  
    );
}

export default sideDrawer;