import { dataBase } from "../data/database.js";

// all views
import { getHomeView } from "../view/home.js";
import { getThankyouView } from "../view/thankyou.js";
import { getAllProductsView } from "../view/getAllProductsView.js";
import { getProductView } from "../view/getProductView.js";
import { getCheckoutView } from "../view/checkoutView.js";
import { getDealView } from "../view/getDealView.js";



class Controller
{
    viewDivEl;
    state;

    constructor(viewDivRef, stateRef)
    {
        this.viewDivEl = viewDivRef;
        this.state = stateRef;
    }

    process(action,data)
    {
        console.log('Controller.process action=',action,', data =',data);
        // get view contents
        let viewContents = this.#getView(action,data);
        // show view
        this.viewDivEl.innerHTML = viewContents;
        console.log("Controller.process view=",this.state.getCurrentViewName());
    }
    #getView(action,data)
    {
        console.log('Controller.#getView action =',action,', data =',data);
        let viewContents = '';
        switch(action)
        {
            case 'home':
                {
                    this.state.setCurrentViewName("Home");
                    viewContents = getHomeView();
                }break;

            case 'browseProducts':
                {
                    this.state.setCurrentViewName('AllProducts');
                    let model = Object.values(dataBase.products);
                    viewContents = getAllProductsView(model);
                }break;

            case 'viewProduct':
                {
                    this.state.setCurrentViewName('Product');
                    let productId = data;
                    let model = dataBase.products[productId];
                    viewContents = getProductView(model);
                }break;

            case 'addToCart':
                {
                    let productId = data;
                    this.state.addToCart(productId);
                    this.state.setCurrentViewName('AllProducts');
                    let model = Object.values(dataBase.products);
                    viewContents = getAllProductsView(model);
                }break;

            case 'buyNow':
                {
                   let productId = data;
                   this.state.addToCart(productId);
                   let model = this.#createCheckoutModel();
                   this.state.setCurrentViewName('Checkout');
                   viewContents = getCheckoutView(model);
                }break;

            case 'checkout':
                {
                let model = this.#createCheckoutModel();
                this.state.setCurrentViewName('Checkout');
                viewContents = getCheckoutView(model);
                }break;

            case 'deals':
                {
                    this.state.setCurrentViewName('Deals');
                    viewContents = getDealView();
                }break;

            case 'thankyou':
                {
                    this.state.setCurrentViewName('Thankyou');
                    let productId = data;
                    let model = dataBase.products[productId];
                    viewContents = getThankyouView(model);
                }break;

            default:
                {
                    this.state.setCurrentViewName('Unknown');
                    viewContents = 'No view defined for action - '+data;
                }
        }


        return viewContents;
    }

    #createCheckoutModel()
    {
        let model = {
            products : [],
            totalPrice : 0
       };
       let productIdsInCart = this.state.getCartItems();
       console.log("productIdsInCart =", productIdsInCart);
       for(let pId of productIdsInCart)
       {
            let product = dataBase.products[pId];
            model.products.push(product);
            model.totalPrice += product.price;
       }
       return model;
    }

}

export { Controller };