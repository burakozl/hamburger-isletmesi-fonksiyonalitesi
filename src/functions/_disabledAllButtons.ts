import { meatball,chicken,underdone,medium,overcooked,cookChicken,processDiv,resetStorage } from "./_buttonElements.js";

export function disabledAllButtons() {
    meatball.style.display = "none";
    chicken.style.display = "none";
    underdone.style.display = "none";
    medium.style.display = "none";
    overcooked.style.display = "none";
    cookChicken.style.display = "none";
    processDiv.style.display = "none";
    resetStorage.style.display = "none";
    meatball.disabled = false;
    chicken.disabled = false;
}