/**
* @description : Stock account management  
* @param {}
* @return Displays the stock account  
**/
const input = require('readline-sync')
const fs = require('fs')
numRestriction = /[0-9]/g;
nameRestriction = /[A-z]/g;
class Customer {
    constructor(name, password, shares, amount) {
        this.name = name;
        this.password = password;
        this.shares = shares;
        this.amount = amount;
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
        this.custData = JSON.parse(jsonData);
    }
    checkAccount(name, password) {
        let position = -1;
        for (let i in this.custData.customer) {
            if (this.custData.customer[i].name == name && this.custData.customer[i].password == password) {
                position = i;
            }
        }
        return position;
    }
}
class Createacc extends StockAccount {
    constructor() {
        super()
    }
    createAccount = async () => {
        let custName = input.question('Enter Account Holder Name : ');
        if (!nameRestriction.test(custName)) { //input validation of name 
            this.custName = input.question("No special characters Invalid name! : ");
        }
        let password = input.question('Enter The password : ');
        let stockName = input.question('Enter Stock Name : ');
        if (!nameRestriction.test(stockName)) { //input validation of name 
            this.stockName = input.question("No special characters Invalid name! :");
        }
        let shares = input.questionInt('Enter Numbers Of Shares : ');
        if (!numRestriction.test(shares)) { //input validation of numOfStock
            this.shares = input.question("Enter digits only : ");
        }
        let amount = input.questionInt('Enter the amount in hand : ');
        if (!numRestriction.test(amount)) { //input validation of numOfStock
            this.amount = input.question("Enter digits only : ");
        }
        let customerOb = new Customer(custName, password, shares, amount);
        this.custData.customer.push(JSON.parse(JSON.stringify(customerOb)));
        await fs.writeFileSync('stock.json', JSON.stringify(this.custData));
        console.log("new account successfully created ")
    }
}
class BuyStock extends StockAccount {
    constructor() {
        super()
    }
    buyStock(custIndex) {
        console.log(`-------** Welcome ${this.stockData.customer[custIndex].name}..`);
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
        console.log('entry added ')
    }
}
class SellStock extends StockAccount {
    constructor() {
        super()
    }
    sellStock(custIndex) {
        console.log('----Available Stocks----');
        for (let n in this.stockData.customer[custIndex].stock) {
            console.log(`${n} => ${this.stockData.customer[custIndex].stock[n].name}`);
        }
        let nameStock = input.question('Enter name of the Stock for sell : ');
        for (let n in this.stockData.customer[custIndex].stock) {
            if (this.stockData.customer[custIndex].stock[n].name == nameStock) {
                this.stockData.customer[custIndex].stock.splice(n, 1);
            }
        }
        fs.writeFileSync('stock.json', JSON.stringify(this.stockData));
    }
}
class PrintStock extends StockAccount {
    constructor() {
        super()
    }
    printReport(indexOfCust) {
        console.log(`** Report stock of ${this.custData.customer[indexOfCust].name}`);
        for (let n in this.custData.customer[indexOfCust].shares) {
            console.log(this.custData.customer[indexOfCust].shares[n]);
        }
    }
}
module.exports = {
    StockAccount, PrintStock, BuyStock, SellStock, Createacc
}
