import { transactionProcesses } from "./_buttonElements.js";
import { wait } from "./_wait.js";

export async function putSaucesAndProductsOnServingTray(){
    transactionProcesses.innerText = "Servis tabağı hazırlanıyor";
    await wait(1000);
    //console.log("Servis tabağına sos ve yemek koyuldu");
}