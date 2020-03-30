const path = require('./stockAccountBL');
const fs = require('fs').promises;
let input = require('readline-sync')
async () => { //reading json file using async await
    const jsonData = await fs.readFile('stock.json');
    this.stockData = JSON.parse(jsonData);
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
                    stockBuy.buyStock(result);
                    break;
                case 2:
                    stockSell.sellStock(result);
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