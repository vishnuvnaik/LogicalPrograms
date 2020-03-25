const input = require('readline-sync')
const fs = require('fs')
strRes = /[A-z]/g;
numRes = /[0-9]/g;
class Rice {
    constructor(riceName, weight, pricePerKg) {
        this.riceName = riceName;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
        let jsonData = fs.readFileSync('inventory.json')
        this.inventData = JSON.parse(jsonData)
        this.add = function () {
            //add = () => {
            this.riceName = input.question(' enter the ricename ')
            if (!strRes.test(this.riceName)) {
                this.riceName = input.question('n special characters, enter ricename again')
            }
            this.weight = input.question(' enter the weight of rice ')
            if (!numRes.test(this.weight)) {
                this.weight = input.questionInt('includes only numbers')
            }
            this.pricePerKg = input.question(' enter the price per kg of rice ')
            if (!numRes.test(this.pricePerKg)) {
                this.pricePerKg = input.questionInt('includes only numbers')
            }
            let rice = new Rice(this.riceName, this.weight, this.pricePerKg)
            this.inventData.rice.push(JSON.parse(JSON.stringify(rice)));
            fs.writeFileSync('inventory.json', JSON.stringify(this.inventData))
            console.log("entry added")
        }
    }
}
class Wheat {
    constructor(wheatName, weight, pricePerKg) {
        this.wheatName = wheatName;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
        let jsonData = fs.readFileSync('inventory.json')
        this.inventData = JSON.parse(jsonData)
        this.addW = function () {
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
            console.log("entry added")
        }
    }
}
class Pulse {
    constructor(pulsesName, weight, pricePerKg, total) {
        this.pulsesName = pulsesName;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
        this.total = total;
        let jsonData = fs.readFileSync('inventory.json')
        this.inventData = JSON.parse(jsonData)
        this.addP = function () {
            let pulsesName = input.question(' enter the pulse name ')
            if (!strRes.test(pulsesName)) {
                pulsesName = input.question('np special characters, enter ricename again')
            }
            let weight = input.question(' enter the weight of pulse ')
            if (!numRes.test(weight)) {
                weight = input.questionInt('includes only numbers')
            }
            let pricePerKg = input.question(' enter the price per kg of pulse ')
            if (!numRes.test(pricePerKg)) {
                pricePerKg = input.questionInt('includes only numbers')
            }
            const pulse = new Pulse(pulsesName, weight, pricePerKg)
            this.inventData.inventry.push(JSON.parse(JSON.stringify(pulse)));
            fs.writeFileSync('inventory.json', JSON.stringify(this.inventData))
            console.log("entry added")
        }
    }
}
class InventoryManage {
    constructor() {
        this.newRice = new Rice;
        this.wheat = new Wheat;
        this.pulse = new Pulse;
        let jsonData = fs.readFileSync('inventory.json')
        this.inventData = JSON.parse(jsonData)
    }
    addItems = () => {
        try {
            var ch = Number(input.questionInt("Choose from the given options \n" +
                "1 - Add Rice \n2 - Add Wheat \n3 - Add Pulses \n4 - Add new inventory \n "))
            switch (ch) {
                case 1:
                    this.newRice.add();
                    break;
                case 2:
                    this.wheat.addW();
                    break;
                case 3:
                    this.newPulse.addP();
                    break;
                case 4:
                    process.exit(0);
                default:
                    console.log("invalid");
            }
        }
        catch (err) {
            console.log(err)
        }
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
        console.log("rice total   = ", riceTot);
        console.log("wheat total  = ", wheatTot);
        console.log("pulses total = ", pulsesTot);
        console.log('grand total  = ', grandTot)
    }
}
module.exports = {
    InventoryManage
}