export function wait(timeToWait) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(resolve);
        }, timeToWait);
    });
}
