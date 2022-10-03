import { materials } from "./_materials.js";

export const getStorage = () => {
    let stokInStorage:any = [];
    materials.map(materialStok => {
        if(localStorage.getItem(`${materialStok.name}`) !== null){
            stokInStorage.push({
                name: materialStok.name,
                total: localStorage.getItem(`${materialStok.name}`),
                isChecked: materialStok.isChecked
            });
        }else{
            stokInStorage.push({
                name: materialStok.name,
                total: materialStok.total,
                isChecked: materialStok.isChecked
            });
        }            
    });
    return stokInStorage;
}