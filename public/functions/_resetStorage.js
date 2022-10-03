import { resetStorage } from "./_buttonElements.js";
export function resetStok() {
    resetStorage.addEventListener('click', function () {
        localStorage.clear();
        location.reload();
    });
}
