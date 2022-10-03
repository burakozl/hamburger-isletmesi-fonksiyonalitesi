import { materials } from "./_materials.js";

export function checkedCheck(name:any){
    const material:any = materials.find(item => {
       return item.name == name;    
    });
        if(material.isChecked){
            material.isChecked = false;
        }else{
            material.isChecked = true;
        }  
                      
}