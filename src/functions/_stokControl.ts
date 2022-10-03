import { chickenCookingDegreeControl } from "./_chickenCookingDegreeControl.js";
import { getStorage } from "./_getStorage.js";
import { meatballCookingDegreeControl } from "./_meatballCookingDegreeControl.js";
import { transactionProcesses,meatball,chicken,takeOrderBtn, resetStorage } from "./_buttonElements.js";
import { wait } from "./_wait.js";
import { resetStok } from "./_resetStorage.js";

export const stokControl = async () => {
    transactionProcesses.innerText = "stok kontrol ediliyor..."
    await wait(3000);

    async function meatballOrChickenCheck(){
        transactionProcesses.innerText = "1 sn sonra köfte tavuk seçimi yapabiliceksiniz";
        await wait(1000);
        meatball.style.display = "";
        chicken.style.display = "";
        meatball?.addEventListener('click',meatballCookingDegreeControl);
        chicken?.addEventListener('click',chickenCookingDegreeControl);
    }
 
    
    let stokInStorage = getStorage();
    //console.log(stokInStorage);
    
    let inStok = stokInStorage.every((item:any) => {
            return parseInt(item.total) > 0                 
        });
    if(inStok){
        meatballOrChickenCheck();
    }else{
        takeOrderBtn.disabled = true;
        resetStorage.style.display = "";
        transactionProcesses.innerText = "Stokta eksik malzeme var. İşleminiz iptal edildi devam edebilmek için stoğu doldur butonuna basınız...";
        resetStok();
    }
        
}