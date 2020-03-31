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
        let compFound = 0;
        const comData = fs.readFileSync('company.json');
        this.companyData = JSON.parse(comData);
        this.compData = this.companyData.company;
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
        let isAvailable = true;
        for (let i = 0; i < this.companyData.company.length; i++) {
            if (this.companyData.company[i].Name == Name) {
                isAvailable = true;
                newObj.buyShare(Name, NoOfShare, userName);
                compFound++;
            }
        }
        if (compFound == 0) {

            console.log("Enter valid data");
        }
    }
    buyShare(Name, NoOfShare, userName) {
        let value;
        let num = parseInt(NoOfShare);
        let companyData = fs.readFileSync('company.json', 'utf8');
        let compJson = JSON.parse(companyData);
        let compInfo = compJson.company;
        compInfo.forEach(function (company) {
            if (Name == company.Name) {
                var userShare = parseInt(Customer.shares);
                var totalShare = NoOfShare - userShare;
                Customer.shares = totalShare;
                value = parseInt(company.Price);
            }
        });
        fs.writeFileSync('company.json', JSON.stringify(compJson));
        let newCompData = fs.readFileSync('company.json', 'utf8')
        let dataJson = JSON.parse(newCompData);
        console.log(dataJson);
        console.log('company file Successfully Updated');
        console.log();
        let custData = fs.readFileSync('stock.json', 'utf8');
        let infoCust = JSON.parse(custData);
        let userInfo = infoCust.customer;
        userInfo.forEach(function (customer) {
            if (userName == customer.userName) {
                let userShare = parseInt(customer.shares);
                let shareP = value;
                let add = userShare + num;
                customer.share = add;
                let total = shareP * num;
                let userAmount = (Number(customer.amount));
                let uAmount = userAmount - total;
                customer.amount = uAmount;

            }
        });

        fs.writeFileSync('stock.json', JSON.stringify(infoCust));
        var newData = fs.readFileSync('stock.json')
        let detail = JSON.parse(newData);
        console.log(detail);
        console.log('User file Successfully updated');
        console.log();
    }

}


class SellStock extends StockAccount {
    constructor() {
        super()
    }
    sellStock(userName) {
        let stockSell = input.questionInt('enter the number of stock to sell ')
        let pricePerShare = input.questionInt(' enter the price per share ');
        let custData = fs.readFileSync('stock.json', 'utf8');
        let infoCust = JSON.parse(custData);
        let userInfo = infoCust.customer;
        userInfo.forEach(function (customer) {
            if (userName == customer.userName) {
                let newShare = parseInt(customer.shares) - stockSell;
                let newPrice = stockSell * pricePerShare;
                customer.shares = newShare;
                let newAmt = customer.amount - newPrice;
                customer.amount = newAmt;
            }
        });
        fs.writeFileSync('stock.json', JSON.stringify(infoCust));
        var newData = fs.readFileSync('stock.json')
        let detail = JSON.parse(newData);
        console.log(detail);
        console.log('User file Successfully updated');
        console.log();
    }
}

class PrintStock extends StockAccount {
    constructor() {
        super()
    }
    printReport(indexOfCust) {
        console.log(this.custData.customer)
        console.log(this.companyData.company);
    }
}
let newObj = new BuyStock;
module.exports = {
    StockAccount, PrintStock, BuyStock, SellStock, Createacc
}
