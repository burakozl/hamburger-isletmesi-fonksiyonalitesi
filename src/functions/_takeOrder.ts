import { stokControl } from "./_stokControl.js";
import { transactionProcesses,processDiv, takeOrderBtn } from "./_buttonElements.js";
import { wait } from "./_wait.js";

export async function takeOrder(){
    takeOrderBtn.disabled = true;
    processDiv.style.display = "";
    transactionProcesses.innerText = "1sn bekle"
    await wait(1000);
    stokControl(); 
}