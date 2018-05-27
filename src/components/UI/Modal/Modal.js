import React,{ Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux/Aux";
import BackDrop from "../BackDrop/BackDrop"

class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show
    }
    render() {
        return (
            <Aux>
                <div className = {classes.Modal}
                style = {{
                    transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : this.props.show ? '1' : '0'
                }}
                >
                    {this.props.children}
                </div>
                <BackDrop show = {this.props.show} close = {this.props.cancelPurchase}/>
            </Aux>
        )
    }
}

export default Modal;