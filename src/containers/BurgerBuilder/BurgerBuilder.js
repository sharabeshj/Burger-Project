import React,{ Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from  "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"


const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
}

export default class BurgerBuilder extends Component{
    state = {
       ingredients : {
            meat : 0,
            bacon : 0,
            cheese : 0,
            salad : 0
       },
       totalprice : 4,
       purchaseable : false,
       purchasing : false
    }
    updatePurchaseable=(ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((arr,el) => arr+el,0);
        this.setState({ purchaseable : sum>0})
    }
    purchasingHandler = () => {
        this.setState({ purchasing : true });
    }
    cancelPurchase = () => {
        this.setState({ purchasing : false });
    }
    continuePurchase = () => {
        alert('You continued!')
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalprice;
        const updatedPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({ ingredients : updatedIngredients, totalprice : updatedPrice });
        this.updatePurchaseable(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] - 1;
        if(updatedCount < 0) return;
        const updatedIngredients = {
            ...this.state.ingredients,
            [type]  : updatedCount
        };
        const updatedPrice = this.state.totalprice - INGREDIENT_PRICES[type];
        this.setState({ ingredients : updatedIngredients,totalprice : updatedPrice });
        this.updatePurchaseable(updatedIngredients);
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing} cancelPurchase = {this.cancelPurchase}>
                    <OrderSummary ingredients = {this.state.ingredients} price = {this.state.totalprice} clickCancel = {this.cancelPurchase} clickContinue = {this.continuePurchase}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls price = {this.state.totalprice}ingredientAdded = {this.addIngredientHandler} ingredientRemoved = {this.removeIngredientHandler} disabled = {disabledInfo} purchaseable = {this.state.purchaseable} clickAction = {this.purchasingHandler}/>
            </Aux>
        )
    }
}