import { getStorage } from "./_getStorage.js";
import { transactionProcesses } from "./_buttonElements.js";
import { wait } from "./_wait.js";


export  async function serveTheCustomer(){      
    await wait(1000);       
    transactionProcesses.innerText = "Müşteriye Servis edildi";

    let stokInStorage:any;
    stokInStorage = getStorage();

    stokInStorage.map((item:any) => {
        if(item.isChecked === true){
            item.total--;
            localStorage.setItem(`${item.name}`,JSON.stringify(item.total));
        }          
        
        //console.log(item.name + ":" + item.total);     
    });

    //console.log("Müşteriye servis edildi");
    location.reload();
}