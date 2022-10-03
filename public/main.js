import { checkedCheck } from './functions/_checkedCheck.js';
import { takeOrder } from './functions/_takeOrder.js';
import { disabledAllButtons } from './functions/_disabledAllButtons.js';
import { takeOrderBtn } from './functions/_buttonElements.js';
window.onload = function main() {
    //checkboxes
    var allCheckboxes = document.querySelectorAll('input');
    var allMaterials = document.querySelector('#all');
    allMaterials.addEventListener('click', function () {
        allCheckboxes.forEach(function (input) {
            if (input.id === "all") {
                return;
            }
            else {
                if (input.checked) {
                    allMaterials.checked = false;
                    input.checked = false;
                }
                else {
                    allMaterials.checked = true;
                    input.checked = true;
                    checkedCheck(input.id);
                }
            }
        });
    });
    allCheckboxes.forEach(function (material) {
        if (material.id === "all") {
            return;
        }
        else {
            //console.log(material.id);
            material.addEventListener('click', function () {
                checkedCheck(material.id);
            });
        }
    });
    disabledAllButtons();
    takeOrderBtn === null || takeOrderBtn === void 0 ? void 0 : takeOrderBtn.addEventListener('click', function () {
        takeOrder();
    });
};
