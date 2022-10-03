import {wait} from './_wait.js';
import { transactionProcesses } from './_buttonElements.js';
import { materials } from './_materials.js';


export async function prepareDrink(){
    const patates = materials.find((material) => material.name === 'patates');
    const icecek = materials.find((material) => material.name === 'cola');
    if(patates.isChecked && icecek.isChecked){
        transactionProcesses.innerText = "Hambuger, içecekler ve patates kızartması hazırlanıyor";
        await wait(2000);
        transactionProcesses.innerText = "Hambuger, içecekler ve patates kızartması hazır";
    }else if(!patates.isChecked && icecek.isChecked){
        transactionProcesses.innerText = "Hambuger ve içecekler hazırlanıyor";
        await wait(2000);
        transactionProcesses.innerText = "Hambuger ve içecekler hazır";
    }else if(patates.isChecked && !icecek.isChecked){
        transactionProcesses.innerText = "Hambuger ve patates kızartması hazırlanıyor";
    }else{
        transactionProcesses.innerText = "Hambuger hazırlanıyor";
    }

    
    
}