const path = require('./addressBookBL');
var fs = require('fs');
var input = require('readline-sync')
try {
    let addBook = new path.AddressExt();
    while (true) {
        console.log('1 : For Add Entry');
        console.log('2 : For Delete Entry');
        console.log('3 : For Edit Entry');
        console.log('4: For Exit ')
        let ch = input.questionInt(' enter your choice ')
        switch (ch) {
            case 1:
                addBook.addData();
                break;
            case 2:
                addBook.removeEntry();
            case 3:
                false;
                break;
            case 4:
                return;
        }
    }

} catch (error) {
    console.log(error)
}



