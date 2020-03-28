const input = require('readline-sync')
const fs = require('fs')
numRestriction = /[0-9]/g;
nameRestriction = /[A-z]/g;
class Customer {
    constructor(name, password, stock) {
        this.name = name;
        this.password = password;
        this.stock = [stock];
    }
}
class Stock {
    constructor(name, numOfStock, price) {
        this.name = name;
        this.numOfStock = numOfStock;
        this.price = price;
    }
}
class StockAccount {
    constructor() {
        const jsonData = fs.readFileSync('stock.json');
        this.stockData = JSON.parse(jsonData);
    }
    checkAccount(name, password) {
        let position = -1;
        for (let i in this.stockData.customer) {
            if (this.stockData.customer[i].name == name && this.stockData.customer[i].password == password) {
                position = i;
            }
        }
        return position;
    }
}
class BuyStock extends StockAccount {
    constructor() {
        super()
    }
    buyStock(custIndex) {
        console.log(`-------** Welcom ${this.stockData.customer[custIndex].name}..`);
        let name = input.question('Enter the name of Stock : ');
        if (!nameRestriction.test(name)) { //input validation of name 
            this.name = input.question("No special characters Invalid name! :");
        }
        let numOfStock = input.questionInt('Enter Number of stock : ');
        if (!numRestriction.test(numOfStock)) { //input validation of numOfStock
            this.numOfStock = input.question("Enter digits only : ");
        }
        let price = input.questionInt('Enter the price of Stock : ');
        if (!numRestriction.test(price)) { //input validation of numOfStock
            this.price = input.question("Enter digits only : ");
        }
        let buyStock = new Stock(name, numOfStock, price);
        this.stockData.customer[custIndex].stock.push(JSON.parse(JSON.stringify(buyStock)));
        fs.writeFileSync('stock.json', JSON.stringify(this.stockData));
    }
}
class SellStock extends StockAccount {
    constructor() {
        super()
    }
    sellStock(custIndex) {
        console.log('----Available Stocks-----');
        for (let n in this.stockData.customer[custIndex].stock) {
            console.log(`${n} => ${this.stockData.customer[custIndex].stock[n].name}`);
        }
        let nameStock = readLine.question('Enter name of the Stock for sell : ');
        for (let n in this.stockData.customer[custIndex].stock) {
            if (this.stockData.customer[custIndex].stock[n].name == nameStock) {
                this.stockData.customer[custIndex].stock.splice(n, 1);
            }
        }
        // this.commercialData.customer[indexOfCust].stock.push(JSON.parse(JSON.stringify(buyStock)));
        fs.writeFileSync('stock.json', JSON.stringify(this.stockData));
    }
}
class PrintStock extends StockAccount {
    constructor() {
        super()
    }
    printReport(indexOfCust) {
        console.log(`** Report stock of ${this.stockData.customer[indexOfCust].name}`);
        for (let n in this.stockData.customer[indexOfCust].stock) {
            console.log(this.stockData.customer[indexOfCust].stock[n]);
        }
    }
}



module.exports = {
    StockAccount, PrintStock, BuyStock, SellStock
}
