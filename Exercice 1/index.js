import {Pizza} from './pizza.js';

window.addEventListener('DOMContentLoaded', () => {
//instancier 3 instances de la classe `Pizza` :


    let laVeggie = new Pizza("La Veggie", "tomate", "fromage", "légumes");

    let laMeattie = new Pizza("La Meattie", "tomate", "fromage", "viande");

    let laFishie = new Pizza("La Fishie", "tomate", "fromage", "poisson");

    console.log(laVeggie);
    console.log(laMeattie);
    console.log(laFishie);
})