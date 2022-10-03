import { materials } from './_materials.js';
import {wait} from './_wait.js';

export async function hamburgerMaking(){
    await wait(2000);
    //console.log("hamburger hazır");
    const ekmek = materials.find((material) =>  material.name === 'ekmek' );
    ekmek.isChecked = true;
}