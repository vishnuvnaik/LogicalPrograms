/***************************************************************
 * @Execution : default node : cmd> stockAccount.js
 * @Purpose : To store and display stock account management
 * @description : ­> Create Stock and Stock Portfolio Class holding the list of Stocks read
from the input file. Have functions in the Class for buying,selling,print stocks and also to create account
 * @overview : Stock account program 
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/
const path = require('./stockAccountBL');
const fs = require('fs').promises;
let input = require('readline-sync')
async () => { //reading json file using async await
    const jsonData = await fs.readFile('stock.json');
    this.custData = JSON.parse(jsonData);
}
try {
    let stockAcc = new path.StockAccount();
    let stockPrint = new path.PrintStock();
    let stockSell = new path.SellStock();
    let stockBuy = new path.BuyStock();
    let newAcc = new path.Createacc();
    let choice = Number(input.questionInt("Do you need to create new account \n" +
        "1 - yes \n2 - no "))
    if (choice == 1) {
        newAcc.createAccount();
    }
    else {

        let userName = input.question('Enter Username = ');
        let password = input.question('Enter the Password = ');
        let result = stockAcc.checkAccount(userName, password);
        if (result != -1) {
            console.log('Successfully Logged In');
            stockPrint.printReport(result);
            var ch = Number(input.questionInt("Choose from the given options \n" +
                "\n1 - buy Stock \n2 - Sell stock \n3 - print report \n4 - Exit \n"))
            switch (ch) {
                case 1:
                    stockBuy.buyStock(userName);
                    break;
                case 2:
                    stockSell.sellStock(userName);
                    break;
                case 3:
                    stockPrint.printReport(result);
                    break;
                case 4:
                    process.exit(0);
                default:
                    console.log("invalid");
            }
        }
        else {
            console.log("credentials not found ")
        }
    }
}
catch (err) {
    console.log(err)
}