const input = require('readline-sync')

class Stock {
    constructor(name, numOfStock, price) {
        this.name = name;
        this.numOfStock = numOfStock;
        this.price = price;
    }
}
class StockAccount {
    constructor() {
    }
    addStock = async () => {
        try {
            let name = readLine.question('Enter name of stock : ');
            let numOfStock = readLine.questionInt('Enter number of stock : ');
            let price = readLine.questionInt('Enter the price : ');
            let stock = new Stock(name, numberOfStock, price);
            this.stockData.stock.push(JSON.parse(JSON.stringify(stock)));
            await fs.writeFileSync('stockDetails.json', JSON.stringify(this.stockData));
            console.log(' entry added to the file ')
        }
        catch (err) {
            console.log(err)
        }
    }
    printReport = async () => {
        for (let i in this.stockData.stock) {
            let totalPrice = this.stockData.stock[i].price * this.stockData.stock[i].numOfStock;
            console.log('Total price = ', totalPrice);
        }

    }
}
module.exports = {
    StockAccount
}