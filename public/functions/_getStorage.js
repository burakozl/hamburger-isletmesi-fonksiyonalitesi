import { materials } from "./_materials.js";
export var getStorage = function () {
    var stokInStorage = [];
    materials.map(function (materialStok) {
        if (localStorage.getItem("".concat(materialStok.name)) !== null) {
            stokInStorage.push({
                name: materialStok.name,
                total: localStorage.getItem("".concat(materialStok.name)),
                isChecked: materialStok.isChecked
            });
        }
        else {
            stokInStorage.push({
                name: materialStok.name,
                total: materialStok.total,
                isChecked: materialStok.isChecked
            });
        }
    });
    return stokInStorage;
};
