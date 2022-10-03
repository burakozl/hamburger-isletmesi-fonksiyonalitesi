import { friedPotatoes } from "./_friedPotatoes.js";
import { hamburgerMaking } from "./_hamburgerMaking.js";
import { prepareDrink } from "./_prepareDrink.js";
import { putSaucesAndProductsOnServingTray } from "./_putSaucesAndProductsOnServingTray.js";
import { serveTheCustomer } from "./_serveTheCustomer.js";


export  function callSteps(){ 
    const req1 = new Promise(resolve => {    
        resolve(friedPotatoes())
    }); 
    const req2 = new Promise(resolve => {    
        resolve(hamburgerMaking())
    }); 
    const req3 = new Promise(resolve => {    
        resolve(prepareDrink())
    });
    return Promise.all([req1,req2,req3]).then(putSaucesAndProductsOnServingTray).then(serveTheCustomer)
}