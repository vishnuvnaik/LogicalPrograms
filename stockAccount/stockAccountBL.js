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
    constructor(userName, password, shares, amount) {
        this.userName = userName;
        this.password = password;
        this.shares = shares;
        this.amount = amount;
    }
}
class Company {
    constructor(Name, NoOfShare, Price) {
        this.Name = Name;
        this.NoOfShare = NoOfShare;
        this.Price = Price;
    }
}
class StockAccount {
    constructor() {
        const jsonData = fs.readFileSync('stock.json');
        this.custData = JSON.parse(jsonData);
        const comData = fs.readFileSync('company.json');
        this.companyData = JSON.parse(comData);
        this.compData = this.companyData.company;
    }
    checkAccount(name, password) {
        let position = -1;
        for (let i in this.custData.customer) {
            if (this.custData.customer[i].userName == name && this.custData.customer[i].password == password) {
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
    buyStock(userName) {
        const jsonData = fs.readFileSync('stock.json');
        let custData = JSON.parse(jsonData);
        const comData = fs.readFileSync('company.json');
        this.companyData = JSON.parse(comData);
        this.compData = this.companyData.company;
        let compFound = 0;
        console.log('The company list ')
        console.log(this.compData);
        let Name = input.question("Enter name of company to buy shares:");
        if (!nameRestriction.test(Name)) { //input validation of name 
            this.Name = input.question("No special characters Invalid name! :");
        }
        let NoOfShare = input.question("Enter number of shares you want to purchase:");
        if (!numRestriction.test(NoOfShare)) { //input validation of numOfStock
            this.NoOfShare = input.question("Enter digits only : ");
        }
        let isAvai = true;
        for (let i = 0; i < this.companyData.company.length; i++) {
            if (this.companyData.company[i].Name == Name) {
                isAvai = true;
                let userShare = parseInt(Customer.shares);
                let totalShare = NoOfShare - userShare;
                Customer.shares = totalShare;
                let value = parseInt(this.companyData.company[i].Price);
                fs.writeFileSync('company.json', JSON.stringify(this.companyData));
                let newData = fs.readFileSync('company.json', 'utf8')
                let dataJson = JSON.parse(newData);
                console.log(dataJson);
                console.log('Successfully Updated');
            }
            else {
                isAvai = false;
            }
        }
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
