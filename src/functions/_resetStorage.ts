import { resetStorage } from "./_buttonElements.js";

export function resetStok() {
    resetStorage.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    });
}