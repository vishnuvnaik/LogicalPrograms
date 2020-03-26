const path = require('./inventoryBL')
const input = require('readline-sync')
const fs = require('fs')
let inventory = new path.InventoryManage();
console.log('1 : For Add inventory ');
console.log('2 : For Calculating inventory total ')
console.log('3 : For Exit')
let ch = input.questionInt(' enter your choice ')
switch (ch) {
    case 1:
        inventory.addItems();
        break;
    case 2:
        inventory.calculateTotal();
        break;
    case 3:
        process.exit(0);
    default:
        console.log("invalid");
}