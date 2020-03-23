/**
* @description : Address Book generation 
* @param {}
* @return Displays the address book   
**/
const fs = require('fs')
const input = require('readline-sync')
nameRestriction = /[A-z]/g; //for input validation of string
contactRestriction = /[0-9]{6}/g;
mobRes = /[0-9]{10}/g;   //for input validation of numbers

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
        let jsonData = fs.readFileSync('address.json');
        this.jsonDataa = JSON.parse(jsonData);
    }
}

class AddressBook extends Person { //inheritance implementation
    constructor(id, firstName, lastName, address, city, state, zip, mob) {
        super(id, firstName, lastName, address, city, state, zip, mob)
    }
    addData = async () => { //function to add data 
        try {
            this.id = input.questionInt(' enter the id no '); //enter datas
            this.firstName = input.question('enter the first name')
            if (!nameRestriction.test(this.firstName)) { //input validation of name 
                this.firstName = read.question("No special characters Invalid name! :");
            }
            this.lastName = input.question('  enter the last name ')
            if (!nameRestriction.test(this.lastName)) { //input validation
                this.lastName = read.question("No special characters Invalid name! :");
            }
            this.address = input.question('enter the address')
            if (!nameRestriction.test(this.address)) { //input validation of address 
                this.address = input.question(" No special characters address! :");
            }
            this.city = input.question('enter the city ')
            if (!nameRestriction.test(this.city)) { //input validation of city
                this.city = input.question(" No special characters city! :");
            }
            this.state = input.question('enter the state')
            if (!nameRestriction.test(this.state)) {
                this.state = input.question(" No special characters city! :");
            }
            this.zip = input.questionInt('enter the zip code ')
            if (!contactRestriction.test(this.zip)) { //input validation of zip
                this.zip = input.question("Enter the zip code 6 digits only : ");
            }
            this.mob = input.questionInt('enter the mobile number ')
            if (!mobRes.test(this.mob)) { //input validation of mobile number
                this.mob = input.question("Enter the mod num 10 digits only : ");
            }
            let newObj = new Person(this.id, this.firstName, this.lastName, this.address, this.city, this.state, this.zip, this.mob)
            this.jsonDataa.Person.push(JSON.parse(JSON.stringify(newObj)));
            await fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
            console.log('entry added ')
        }
        catch (err) {
            console.log(err)
        }
    }
    removeEntry = (deleteID) => { //function to remove data
        try {
            let isAvailable = false;
            for (let i = 0; i < this.jsonDataa.Person.length; i++) { //loop to find the id and remove
                if (this.jsonDataa.Person[i].id === deleteID) {
                    isAvailable = true;
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
    editEntry(editID) { //function to edit data
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

module.exports = {
    AddressBook
}
