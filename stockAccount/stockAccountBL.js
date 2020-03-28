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


module.exports = {
    StockAccount, PrintStock, BuyStock, SellStock
}
