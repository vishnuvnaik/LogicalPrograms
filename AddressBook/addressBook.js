/***************************************************************
 * @Execution : default node : cmd> addressBook.js
 * @Purpose : To store and display address book
 * @description : Add Edit remove sort and print addresbook entries stored in the JSON file
 * @overview : Address Book problem
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/
const path = require('./addressBookBL');
// var fs = require('fs').promises;
let input = require('readline-sync')
const fs = require('fs').promises
async () => {
    const jsonData = await fs.readFile('address.json');
    this.jsonDataa = JSON.parse(jsonData);
}
try {
    let addBook = new path.AddressBook();
    while (true) {
        console.log('1 : For Add Entry ');
        console.log('2 : For Delete Entry ');
        console.log('3 : For Edit Entry ');
        console.log('4 : For Sorting ')
        console.log('5 : For printing address book ')
        console.log('6 : For Exit ')
        let ch = input.questionInt(' enter your choice ')
        switch (ch) {
            case 1:
                addBook.addData();
                break;
            case 2:
                addBook.removeEntry();
            case 3:
                addBook.editEntry();
                break;
            case 4:
                addBook.sortByName();
                break;
            case 5:
                addBook.printAddressBook();
            case 6:
                return;
        }
    }

} catch (error) {
    console.log(error)
}



