import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return(
        <header className = {classes.Toolbar}>
            <DrawerToggle toggle = { props.toggle }/>
            <div className = { classes.Logo }><Logo /></div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;