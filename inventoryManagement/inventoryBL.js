const input = require('readline-sync')
const fs = require('fs')
strRes = /[A-z]/g;
numRes = /[0-9]/g;
class Rice {
    constructor(riceName, weight, pricePerKg, total) {
        this.riceName = riceName;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
        this.total = total;
    }
}
class Wheat {
    constructor(wheatName, weight, pricePerKg, total) {
        this.wheatName = wheatName;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
        this.total = total;
    }
}
class Pulse {
    constructor(pulsesName, weight, pricePerKg, total) {
        this.pulsesName = pulsesName;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
        this.total = total;
    }
}
class AddInvent {
    constructor(name, Name, weight, pricePerKg) {
        this.name = name;
        this.Name = Name;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
        let jsonData = fs.readFileSync('inventory.json')
        this.inventData = JSON.parse(jsonData)
    }
    addInventory() {
        this.name = input.question(' enter the name of inventory')
        this.Name = input.question(' enter the name of type ')
        this.weight = input.questionInt(' enter the weight ')
        this.pricePerKg = input.questionInt(' enter the price per kg of the item ')
        let newobj = new AddInvent(this.name, this.Name, this.weight, this.pricePerKg)
        this.inventData.AddInvent.push(JSON.parse(JSON.stringify(newobj)));
        fs.writeFileSync('inventory.json', JSON.stringify(this.inventData))

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
        try {
            let riceName = input.question(' enter the ricename ')
            if (!strRes.test(riceName)) {
                riceName = input.question('np special characters, enter ricename again')
            }
            let weight = input.question(' enter the weight of rice ')
            if (!numRes.test(weight)) {
                weight = input.questionInt('includes only numbers')
            }
            let pricePerKg = input.question(' enter the price per kg of rice ')
            if (!numRes.test(pricePerKg)) {
                pricePerKg = input.questionInt('includes only numbers')
            }
            const ricenew = new Rice(riceName, weight, pricePerKg)
            this.inventData.ricenew.push(JSON.parse(JSON.stringify(ricenew)));
            fs.writeFileSync('inventory.json', JSON.stringify(this.inventData))
        }
        catch (err) {
            console.log(err)
        }
    }
    addWheat = () => {
        let wheatName = input.question(' enter the wheat name ')
        if (!strRes.test(wheatName)) {
            wheatName = input.question('np special characters, enter ricename again')
        }
        let weight = input.question(' enter the weight of wheat ')
        if (!numRes.test(weight)) {
            weight = input.questionInt('includes only numbers')
        }
        let pricePerKg = input.question(' enter the price per kg of wheat ')
        if (!numRes.test(pricePerKg)) {
            pricePerKg = input.questionInt('includes only numbers')
        }
        const wheat = new Wheat(wheatName, weight, pricePerKg)
        this.inventData.wheat.push(JSON.parse(JSON.stringify(wheat)));
        fs.writeFileSync('inventory.json', JSON.stringify(this.inventData))
    }
    addPulses = () => {
        let pulseName = input.question(' enter the ricename ')
        if (!strRes.test(pulseName)) {
            pulseName = input.question('np special characters, enter ricename again')
        }
        let weight = input.question(' enter the weight of rice ')
        if (!numRes.test(weight)) {
            weight = input.questionInt('includes only numbers')
        }
        let pricePerKg = input.question(' enter the price per kg of rice ')
        if (!numRes.test(pricePerKg)) {
            pricePerKg = input.questionInt('includes only numbers')
        }
        const pulse = new Pulse(riceName, weight, pricePerKg)
        this.inventData.pulse.push(JSON.parse(JSON.stringify(pulse)));
        fs.writeFileSync('inventory.json', JSON.stringify(this.inventData))
    }
    calculateTotal() {
        let riceTot = 0;
        let wheatTot = 0;
        let pulsesTot = 0;
        let i = 0;
        for (i = 0; i < this.inventData.rice.length; i++) {
            console.log("the total value of", this.inventData.rice[i].riceName, "is", this.inventData.rice[i].weight * this.inventData.rice[i].pricePerKg);
            this.total = this.inventData.rice[i].weight * this.inventData.rice[i].pricePerKg;
            riceTot += this.total;

        }
        for (i = 0; i < this.inventData.wheat.length; i++) {
            console.log("the total value of", this.inventData.wheat[i].wheatName, "is", this.inventData.wheat[i].weight * this.inventData.wheat[i].pricePerKg);
            this.total = this.inventData.wheat[i].weight * this.inventData.wheat[i].pricePerKg;
            wheatTot += this.total;
        }
        for (i = 0; i < this.inventData.pulses.length; i++) {
            console.log("the total value of", this.inventData.pulses[i].pulsesName, "is", this.inventData.pulses[i].weight * this.inventData.pulses[i].pricePerKg);
            this.total = this.inventData.pulses[i].weight * this.inventData.pulses[i].pricePerKg;
            pulsesTot += this.total;
        }
        let grandTot = riceTot + wheatTot + pulsesTot;
        console.log("rice total = ", riceTot);
        console.log("wheat total = ", wheatTot);
        console.log("pulses total = ", pulsesTot);
        console.log('grand total = ', grandTot)
    }
}
module.exports = {
    InventoryManage, AddInvent
}