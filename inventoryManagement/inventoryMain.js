const path = require('./inventoryBL')
const input = require('readline-sync')
const fs = require('fs')
let inventory = new path.InventoryManage();
let invntry = new path.AddInvent();
console.log('1 : For Adding rice ');
console.log('2 : For Adding wheat ');
console.log('3 : For Adding pulses ');
console.log('4 : For Calculating inventory total ')
console.log('5 : For Exit')
console.log('6 : add inventory ')
let ch = input.questionInt(' enter your choice ')
switch (ch) {
    case 1:
        inventory.addRice();
        break;
    case 2:
        inventory.addWheat();
        break;
    case 3:
        inventory.addPulses();
        break;
    case 4:
        inventory.calculateTotal();
        break;
    case 5:
        process.exit(0);
    case 6:
        invntry.addInventory();
        break;
    default:
        console.log("invalid");
}