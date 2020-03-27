const path = require('./stockAccountBL');
const fs = require('fs').promises;
let input = require('readline-sync')
async () => { //reading json file using async await
    const stock = await fs.readFile('address.json');
    this.stockData = JSON.parse(stock);
}
try {
    let stockAcc = path.StockAccount();
}
catch (err) {
    console.log(err)
}