import React,{ Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./Layout.css";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout  extends Component {
    constructor(props){
        super(props);
        this.state = {
            openDrawer : false
        }
    }
    drawerClose = (e) => {
        this.setState({ openDrawer : false })
    }
    toggleDrawer = (e) => {
        this.setState((prevState) => {
            return { openDrawer : !prevState.openDrawer }
        })
    }
    render(){
        return (
            <Aux>
                <ToolBar toggle = { this.toggleDrawer }/>
                <SideDrawer close = {this.drawerClose} open = {this.state.openDrawer}/>
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;