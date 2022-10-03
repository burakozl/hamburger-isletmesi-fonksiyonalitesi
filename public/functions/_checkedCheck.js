import { materials } from "./_materials.js";
export function checkedCheck(name) {
    var material = materials.find(function (item) {
        return item.name == name;
    });
    if (material.isChecked) {
        material.isChecked = false;
    }
    else {
        material.isChecked = true;
    }
}
