import { callSteps } from "./_callSteps.js";
import { meatball,chicken,underdone,medium,overcooked,transactionProcesses } from "./_buttonElements.js";
import { wait } from "./_wait.js";
import { materials } from "./_materials.js";


export const meatballCookingDegreeControl = () => {
    meatball.disabled = true;
    chicken.style.display = "none";
    underdone.style.display = "";
    medium.style.display = "";
    overcooked.style.display = "";

    const kofte = materials.find((material) =>  material.name === 'kofte' );
    kofte.isChecked = true;

    function disabledCookingTypes(){
        underdone.disabled = true;
        medium.disabled = true;
        overcooked.disabled = true;
    }

    underdone.addEventListener('click', async () => { 
        disabledCookingTypes(); 
        transactionProcesses.innerText = "2 sn sonra az pişmiş köfte hazır";
        await wait(2000);
        //console.log("2sn geçti");  
        await callSteps();  
    });

    medium.addEventListener('click',  async () => {
        disabledCookingTypes();
        transactionProcesses.innerText = "3 sn sonra orta pişmiş köfte hazır";
        await wait(3000);
        //console.log("3sn geçti");
        await callSteps();
    });
    overcooked.addEventListener('click', async ()=> {
        disabledCookingTypes();
        transactionProcesses.innerText = "4 sn sonra çok pişmiş köfte hazır";
        await wait(4000);
        //console.log("4sn geçti");
        await callSteps();
    });
    
}