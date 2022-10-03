import { friedPotatoes } from "./_friedPotatoes.js";
import { hamburgerMaking } from "./_hamburgerMaking.js";
import { prepareDrink } from "./_prepareDrink.js";
import { putSaucesAndProductsOnServingTray } from "./_putSaucesAndProductsOnServingTray.js";
import { serveTheCustomer } from "./_serveTheCustomer.js";
export function callSteps() {
    var req1 = new Promise(function (resolve) {
        resolve(friedPotatoes());
    });
    var req2 = new Promise(function (resolve) {
        resolve(hamburgerMaking());
    });
    var req3 = new Promise(function (resolve) {
        resolve(prepareDrink());
    });
    return Promise.all([req1, req2, req3]).then(putSaucesAndProductsOnServingTray).then(serveTheCustomer);
}
