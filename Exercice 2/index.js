import {Warrior} from './warrior.js';
import {Mage} from './mage.js';

window.addEventListener('DOMContentLoaded', () => {
//instancier 3 instances de la classe `Pizza` :

    let defMage = new Mage("Default Mage");
    let defWar = new Warrior("Default Warrior");
    
    
    let mages  = new Mage("La Veggie", 2000, 46000);

    let warrior = new Warrior("La Meattie", 5200, 60);

    
    console.log(defWar);
    console.log(defMage);
    console.log(mages);
    console.log(warrior);
    
})