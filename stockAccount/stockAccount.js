const path = require('./stockAccountBL');
const fs = require('fs').promises;
let input = require('readline-sync')
async () => { //reading json file using async await
    const jsonData = await fs.readFile('stock.json');
    this.stockData = JSON.parse(jsonData);
}
try {
    let stockAcc = new path.StockAccount();
    let stockAccPrint = new path.PrintStock();
    var ch = Number(input.questionInt("Choose from the given options \n" +
        "1 - Add Stock \n2 - print report \n "))
    switch (ch) {
        case 1:
            stockAcc.addStock();
            break;
        case 2:
            stockAccPrint.printReport();
            break;
        case 3:
            process.exit(0);
        default:
            console.log("invalid");
    }
}
catch (err) {
    console.log(err)
}