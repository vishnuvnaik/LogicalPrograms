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
    //let stockAccPrint = new path.PrintStock();
    let userName = input.question('Enter Username = ');
    let password = input.question('Enter the Password = ');
    let reslt = stockAcc.checkAccount(userName, password);
    if (reslt != -1) {
        console.log('Successfully Logged In');
        stockPrint.printReport(reslt);
        var ch = Number(input.questionInt("Choose from the given options \n" +
            "1 - buy Stock \n2 - Sell stock \n3 - print report \n "))
        switch (ch) {
            case 1:
                stockBuy.buyStock(reslt);
                break;
            case 2:
                stockSell.sellStock(reslt);
                break;
            case 3:
                stockPrint.printReport(reslt);
                break;
            case 3:
                process.exit(0);
            default:
                console.log("invalid");
        }
    }
    else {
        console.log("credentials not found ")
    }
}

catch (err) {
    console.log(err)
}