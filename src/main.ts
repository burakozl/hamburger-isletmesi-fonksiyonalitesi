export {};

import { checkedCheck } from './functions/_checkedCheck.js'
import { takeOrder } from './functions/_takeOrder.js';
import { disabledAllButtons } from './functions/_disabledAllButtons.js';
import { takeOrderBtn } from './functions/_buttonElements.js';


window.onload = function main(){
    //checkboxes
    const allCheckboxes:any = document.querySelectorAll('input');
    const allMaterials:any = document.querySelector('#all');
         
    allMaterials.addEventListener('click',() => {       
        allCheckboxes.forEach((input:any) => {
            if(input.id === "all"){
                return;
            }else{
                if(input.checked){
                    allMaterials.checked = false;
                    input.checked = false;
                }else{
                    allMaterials.checked = true;
                    input.checked = true;
                    checkedCheck(input.id);                   
                }
            }         
        });  
    });

    allCheckboxes.forEach((material:any) => {
        if(material.id === "all"){
            return;
        }else{
            //console.log(material.id);
            material.addEventListener('click', () => {
                checkedCheck(material.id);
            });
        }     
    });

    disabledAllButtons();
    
    takeOrderBtn?.addEventListener('click', () => {
        takeOrder();
    });  
}