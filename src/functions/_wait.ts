export  function wait(timeToWait:number){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(resolve);
        },timeToWait);
    });
}