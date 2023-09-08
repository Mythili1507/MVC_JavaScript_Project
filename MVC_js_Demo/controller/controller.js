import { dataBase } from "../database.js";

// all views
import { getHomeView } from "../view/home.js";
import { getThankyouView } from "../view/thankyou.js";
import { getAllProductsView } from "../view/getAllProductsView.js";
import { getProductView } from "../view/getProductView.js";
import { getCheckoutView } from "../view/checkoutView.js";
import { getDealView } from "../view/getDealView.js";


class Controller
{
    currentViewName;    
    viewDivEl;
    // state
    
    constructor(viewDivRef)
    {
        this.viewDivEl = viewDivRef;
    }
    
    process(reqData)
    {
        console.log('Controller.process ',reqData);
        // get view contents
        let viewContents = this.#getView(reqData);
        // show view
        this.viewDivEl.innerHTML = viewContents;
    }
    
    // private
    #getView(reqData)
    {
        console.log('Controller.#getView ',reqData);
        let viewContents = '';
        switch(reqData.action)
        {
            case 'home':
            {
                this.currentView = 'Home';
                viewContents = getHomeView();
            }break;
            
            case 'browseProducts':
            {
                this.currentView = 'AllProducts';
                let model = Object.values(dataBase.products);
                viewContents = getAllProductsView(model);
            }break;
            
            case 'viewProduct':
            {
                this.currentView = 'Product';
                let productId = reqData.productId;
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
                    this.currentView = 'Checkout';
                    let productId = reqData.productId;//state
                    let model = dataBase.products[productId];// list of prods matching the state
                    viewContents =  getCheckoutView(model);
                }break;

                case 'deals':
                    {
                        this.currentView = 'Deals';
                        let productId = reqData.productId;
                        let model = dataBase.products[productId];
                        viewContents = getDealView(model);
                    }break;
            
            case 'thankyou':
            {
                this.currentView = 'Thankyou';
                let productId = reqData.productId;
                let model = dataBase.products[productId];
                viewContents = getThankyouView(model);
            }break;
            
            default:
            {
                this.currentView = 'Unknown';
                viewContents = 'No view defined for action - '+reqData.action;
            }
        }
        
        console.log('viewContents = ',viewContents);
        return viewContents;
    }
    
}

export { Controller };