import { Controller } from "./controller/controller.js";

const INITIAL_VIEW_NAME = 'home';
const viewDivEl = document.getElementById('viewDiv');

console.log('App loading...');

// state
const appController = new Controller(viewDivEl);

console.log('created controller : ',appController);


console.log("showing home view initially after loading");
let initialReqData = { action : INITIAL_VIEW_NAME};

appController.process( initialReqData );


console.log('App loaded successfully');


function changeView(viewAction, dataKey, dataValue)
{
    let reqData = {};
    reqData.action = viewAction;
    reqData[dataKey] = dataValue;
    
    appController.process(reqData);
}


// binding the module function to window object to be accessed in non module scopes; eg: in HTML onclick
// -- BAD PRACTICE 😥; just for demo
// better to use eventListeners if possible
window.changeViewWithMVC = changeView;
