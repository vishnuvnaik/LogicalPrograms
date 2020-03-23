/**
* @description : Address Book generation 
* @param {}
* @return Displays the address book   
**/
const fs = require('fs')
const input = require('readline-sync')
nameRestriction = /[A-z]/g; //for input validation of string
contactRestriction = /[0-9]/g; //for input validation of numbers

class Person {
    constructor(id, firstName, lastName, address, city, state, zip, mob) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.mob = mob;
    }
}

class AddressBookFunction extends Person { //inheritance implementation
    addData = async () => { //function to add data 
        try {
            const id = input.questionInt(' enter the id no ') //enter datas
            const firstName = input.question('enter the first name')
            if (nameRestriction.test(firstName) === false) { //input validation of name 
                firstName = read.question("No special characters Invalid name! :");
            }
            const lastName = input.question('  enter the last name ')
            if (nameRestriction.test(lastName) === false) { //input validation
                lastName = read.question("No special characters Invalid name! :");
            }
            let address = input.question('enter the address')
            if (nameRestriction.test(address) === false) { //input validation of address 
                address = input.question(" No special characters address! :");
            }
            let city = input.question('enter the city ')
            if (!nameRestriction.test(city) === false) { //input validation of city
                city = input.question(" No special characters city! :");
            }
            let state = input.question('enter the state')
            if (!nameRestriction.test(state)) {
                state = input.question(" No special characters city! :");
            }
            let zip = input.questionInt('enter the zip code ')
            if (!contactRestriction.test(zip) || zip.length != 6) { //input validation of zip
                zip = input.question("Enter the zip code 6 digits only : ");
            }
            let mob = input.questionInt('enter the mobile number ')
            if (!contactRestriction.test(mob) || mob.length != 10) { //input validation of mobile number
                mob = input.question("Enter the mod num 10 digits only : ");
            }
            let newObj = new Person(id, firstName, lastName, address, city, state, zip, mob)
            this.jsonDataa.Person.push(JSON.parse(JSON.stringify(newObj)));
            await fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
            console.log('entry added ')
        }
        catch (err) {
            console.log(err)
        }
    }
    removeEntry = () => { //function to remove data
        try {
            let deleteID = input.questionInt('enter the delete id ') //id to remove 
            let isAvailable = true;
            for (let i = 0; i < this.jsonDataa.Person.length; i++) { //loop to find the id and remove
                if (this.jsonDataa.Person[i].id === deleteID) {
                    this.jsonDataa.Person.splice(i, 1);
                }
                else {
                    isAvailable = false;
                }
            }
            if (isAvailable === true) {
                console.log(' entry deleted')
            }
            else {
                console.log('entry not found')
                return;
            }
            fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
        }
        catch (err) {
            console.log(error)
        }
    }
    set editEntry(editID) { //function to edit data
        try {
            let isAvailable = false;
            for (let i = 0; i < this.jsonDataa.Person.length; i++) {
                if (this.jsonDataa.Person[i].id === editID) {
                    let editAddress = input.question(' enter the new address ')
                    let editCity = input.question(' enter the new city ')
                    let editZip = input.questionInt(' enter the new zip ')
                    let editMob = input.questionInt('enter the new mobile number')
                    this.jsonDataa.Person[i].address = editAddress;
                    this.jsonDataa.Person[i].city = editCity;
                    this.jsonDataa.Person[i].zip = editZip;
                    this.jsonDataa.Person[i].mob = editMob;
                    isAvailable = true;
                }
            }
            if (isAvailable == true) {
                console.log(" edited ")
            }
            else {
                console.log("entry not found ")
            }
            fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
        }
        catch (err) {
            console.log(Error)
        }
    }
    sortByName() {
        for (let i = 0; i < this.jsonDataa.Person.length; i++) {
            for (let j = 0; j < this.jsonDataa.Person.length - 1; j++) {
                if (this.jsonDataa.Person[j].firstName > this.jsonDataa.Person[j + 1].firstName) {
                    let temp = this.jsonDataa.Person[j + 1];
                    this.jsonDataa.Person[j + 1] = this.jsonDataa.Person[j];
                    this.jsonDataa.Person[j] = temp;
                }
            }
        }
        // console.log(this.entries.person);
        console.log('Data sorted Successfully by Name.');
        fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
    }
    printAddressBook = () => { //function to print the address
        try {
            for (let x in this.jsonDataa.Person) {
                for (let inner_x in this.jsonDataa.Person[x]) {
                    console.log(inner_x + " : " + this.jsonDataa.Person[x][inner_x]);
                }
                console.log();
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
class AddressBook extends AddressBookFunction { //Inhertitance implementation
    constructor() {
        super() //Super keyword for calling above class constructor
        let jsonData = fs.readFileSync('address.json');
        this.jsonDataa = JSON.parse(jsonData);
    }
}
module.exports = {
    AddressBook
}
