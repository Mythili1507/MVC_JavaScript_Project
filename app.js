import { Controller } from "./controller/controller.js";
import { State } from "./state/state.js";

const INITIAL_ACTION = 'home';
const viewDivEl = document.getElementById('viewDiv');

console.log('App loading...');

// state
const appState = new State();
const appController = new Controller(viewDivEl, appState);

console.log('created controller : ',appController);
console.log("showing home view initially after loading");


console.log("attaching a function to global window object to trigger appcontroller.process")
appController.process(INITIAL_ACTION,'' );

//window.changeViewWithMVC = appController.process; object will not be available

window.changeViewWithMVC = (action,data) =>
{
    console.log("changeViewWithMVC action =", action,"changeViewWithMVC data = ", data);
    appController.process(action,data);
}

console.log('App loaded successfully');
