import { callSteps } from "./_callSteps.js";
import { chicken,meatball,cookChicken,transactionProcesses } from "./_buttonElements.js";
import { wait } from "./_wait.js";
import { materials } from "./_materials.js";

export const chickenCookingDegreeControl  = () => {

    chicken.disabled = true;
    meatball.style.display = "none";
    cookChicken.style.display = "";

    const tavuk = materials.find((material) =>  material.name === 'tavuk' );
    tavuk.isChecked = true;

    cookChicken.addEventListener('click', async () => {
        cookChicken.disabled = true;
        transactionProcesses.innerText = "3 sn sonra tavuk hazır";
        await wait(3000);
        await callSteps();
    });
}