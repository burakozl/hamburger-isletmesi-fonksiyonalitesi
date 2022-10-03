import { materials } from './_materials.js';
import {wait} from './_wait.js';

export async function friedPotatoes(){
   const patates = materials.find((material) => material.name === 'patates');
   if(patates.isChecked){
        await wait(5000);
   }
    //console.log("patatesler hazır");
}