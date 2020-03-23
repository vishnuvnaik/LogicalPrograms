const input = require('readline-sync')
const fs = require('fs')
class Rice {
    constructor(riceName, weight, pricePerKg) {
        this.riceName = riceName;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
    }
}
class Wheat {
    constructor(wheatName, weight, pricePerKg) {
        this.wheatName = wheatName;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
    }
}
class Pulse {
    constructor(pulsesName, weight, pricePerKg) {
        this.pulsesName = pulsesName;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
    }
}
class InventoryManage {
    constructor() {
        this.rice = [];
        this.wheat = [];
        this.pulses = [];
        let jsonData = fs.readFileSync('inventory.json')
        this.inventData = JSON.parse(jsonData)
    }
    addRice = () => {
        let riceName = input.question(' enter the ricename ')
        let weight = input.question(' enter the weight of rice ')
        let pricePerKg = input.question(' enter the price per kg of rice ')
        const rice = new Rice(riceName, weight, pricePerKg)
        this.inventData.rice.push(JSON.parse(JSON.stringify(rice)));
        fs.writeFileSync('inventory.json', JSON.stringify(this.inventData))
    }
    addWheat = () => {
        let wheatName = input.question(' enter the wheat name ')
        let weight = input.question(' enter the weight of wheat ')
        let pricePerKg = input.question(' enter the price per kg of wheat ')
        const wheat = new Wheat(wheatName, weight, pricePerKg)
        this.inventData.wheat.push(JSON.parse(JSON.stringify(wheat)));
        fs.writeFileSync('inventory.json', JSON.stringify(this.inventData))
    }
    addPulses = () => {
        let pulseName = input.question(' enter the ricename ')
        let weight = input.question(' enter the weight of rice ')
        let pricePerKg = input.question(' enter the price per kg of rice ')
        const pulse = new Pulse(riceName, weight, pricePerKg)
        this.inventData.pulse.push(JSON.parse(JSON.stringify(pulse)));
        fs.writeFileSync('inventory.json', JSON.stringify(this.inventData))
    }
}
module.exports = {
    InventoryManage
}