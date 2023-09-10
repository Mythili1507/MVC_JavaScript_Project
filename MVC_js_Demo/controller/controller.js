import { dataBase } from "../database.js";

// all views
import { getHomeView } from "../view/home.js";
import { getThankyouView } from "../view/thankyou.js";
import { getAllProductsView } from "../view/getAllProductsView.js";
import { getProductView } from "../view/getProductView.js";
import { getCheckoutView } from "../view/checkoutView.js";
import { getDealView } from "../view/getDealView.js";
import { State } from "../state/state.js";


class Controller
{
   // currentViewName;
    viewDivEl;
     state
    //  state = new State();

    constructor(viewDivRef,stateRef)
    {
        this.viewDivEl = viewDivRef;
        this.state = stateRef;
    }

    process(action,data)
    {
        console.log('Controller.process =',action);
        console.log('Controller.process =',data);
        // get view contents
        let viewContents = this.#getView(action,data);
        // show view
        this.viewDivEl.innerHTML = viewContents;
        this.state.innerHTML = viewContents;
    }
    // private
    #getView(action,data)
    {
        console.log('Controller.#getView action =',action,'Controller.#getView data =',data);
        let viewContents = '';
        switch(action)
        {
            case 'home':
            {
                this.state.currentView = 'Home';
                viewContents = getHomeView();
            }break;

            case 'browseProducts':
            {
                this.state.currentView = 'AllProducts';
                let model = Object.values(dataBase.products);
                viewContents = getAllProductsView(model);
            }break;

            case 'viewProduct':
            {
                this.state.currentView = 'Product';
                let productId = data;
                let model = dataBase.products[productId];
                viewContents = getProductView(model);
            }break;
            case 'addToCart':
                {
                    // update state
                    // return  view = browse all prod
                }break;
            case 'buyNow':
                {
                    // update state
                    // return to checkout page
                }break;
            case 'checkout':
                {

                    this.state.currentView = 'Checkout';
                    let productId = data;//state
                    let model = dataBase.products[productId];// list of prods matching the state
                    viewContents =  getCheckoutView(model);
                }break;

                case 'deals':
                    {
                        this.state.currentView = 'Deals';
                        let productId = data;
                        let model = dataBase.products[productId];
                        viewContents = getDealView(model);
                    }break;

            case 'thankyou':
            {
                this.state.currentView = 'Thankyou';
                let productId = data;
                let model = dataBase.products[productId];
                viewContents = getThankyouView(model);
            }break;

            default:
            {
                this.state.currentView = 'Unknown';
                viewContents = 'No view defined for action - '+data;
            }
        }

        console.log('viewContents = ',viewContents);
        return viewContents;
    }

}

export { Controller };