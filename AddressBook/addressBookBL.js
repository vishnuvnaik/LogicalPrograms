/**
* @description : Address Book generation 
* @param {}
* @return Displays the address book   
**/
const fs = require('fs')
const parseJSON = require('json-parse-async')
const input = require('readline-sync')
nameRestriction = /[A-z]/g; //for input validation of string
contactRestriction = /[0-9]/g; //for input validation of numbers
class Person {
    constructor() {
        this.id = this.id;
        this.firstName = this.firstName;
        this.lastName = this.lastName;
        this.address = this.address;
        this.city = this.city;
        this.state = this.state;
        this.zip = this.zip;
        this.mob = this.mob;
        async () => {
            const jsonData = await fs.readFile('address.json'); //async await to read file 
            this.jsonDataa = JSON.parse(jsonData);
        }
    }
}
class AddressBookFunction extends Person { //inheritance implementation
    addData = () => { //function to add data 
        try {

            let id = input.questionInt(' enter the id no ') //enter datas
            let firstName = input.question('enter the first name')
            while (nameRestriction.test(firstName) == false) { //input validation of name 
                firstName = read.question("No special characters Invalid name! :");
            }
            let lastName = input.question('  enter the last name ')
            while (nameRestriction.test(lastName) == false) { //input validation
                lastName = read.question("No special characters Invalid name! :");

            }
            let address = input.question('enter the address')
            while (nameRestriction.test(address) == false) { //input validation of address 
                address = input.question(" No special characters address! :");

            }
            let city = input.question('enter the city ')
            while (nameRestriction.test(city) == false) { //input validation of city
                city = input.question(" No special characters city! :");

            }
            let state = input.question('enter the state')
            while (nameRestriction.test(state) == false) {
                state = read.question(" No special characters city! :");

            }
            let zip = input.questionInt('enter the zip code ')
            while (contactRestriction.test(zip) == false || zip.length != 6) { //input validation of zip
                zip = input.question("Enter the zip code 6 digits only : ");
            }
            let mob = input.questionInt('enter the mobile number ')
            while (contactRestriction.test(zip) == false || mob.length != 10) { //input validation of mobile number
                mob = read.question("Enter the mod num 10 digits only : ");
            }
            let newObj = new Person(id, firstName, lastName, address, city, state, zip, mob)
            //this.jsonDataa.Person.push(JSON.parse(JSON.stringify(newObj)));
            //fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
            async () => { //async await for writing data to json file 
                this.jsonDataa.Person.push(JSON.parseJSON(stringify(newObj)));
                await fs.writeFile('address.json', parseJSON(stringify(this.jsonDataa)));
            }
            //     await fs.writeFile('address.json', JSON.stringify(this.jsonDataa));
            // }
            console.log('entry added ')
        }
        catch (err) {
            console.log(Error)
        }
    }
    removeEntry = () => { //function to remove data

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
        if (isAvailable == true) {
            console.log(' entry deleted')
        }
        else {
            console.log('entry not found')
            return;
        }
        // async () => {
        //     this.jsonDataa.Person.push(JSON.parse(JSON.stringify(newObj)));
        //     await fs.writeFile('address.json', JSON.stringify(this.jsonDataa));
        // }
        //fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
        async () => { //async await for writing data to json file 
            this.jsonDataa.Person.push(JSON.parseJSON(stringify(newObj)));
            await fs.writeFile('address.json', parseJSON(stringify(this.jsonDataa)));
        }
    }
    editEntry(editID) { //function to edit data

        let isAvailable = false;
        editID = input.questionInt('enter the id to edit')
        for (let i = 0; i < this.jsonDataa.Person.length; i++) {
            if (this.jsonDataa[i].id == editID) {
                let editAddress = input.question(' enter the new address ')
                let editCity = input.question(' enter the new city ')
                let editZip = input.questionInt(' enter the new zip ')
                let editMob = input.questionInt('enter the new mobile number')
                this.jsonDataa.person[i].address = editAddress;
                this.jsonDataa.person[i].city = editCity;
                this.jsonDataa.person[i].zip = editZip;
                this.jsonDataa.person[i].mob = editMob;
                isAvailable = true;
            }
        }
        if (isAvailable == true) {
            console.log(" edited ")
        }
        else {
            console.log("entry not found ")
        }
        //fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
        async () => { //async await for writing data to json file 
            this.jsonDataa.Person.push(JSON.parseJSON(stringify(newObj)));
            await fs.writeFile('address.json', parseJSON(stringify(this.jsonDataa)));
        }
    }
    sortByName = () => { //function to sort according to name 
        try {
            let temp = 0;
            for (let i = 1; i < this.jsonDataa.Person.length; i++) {
                let j = i - 1;
                while (j >= 0 && this.jsonDataa.Person[j].firstName > temp.firstName) { //
                    this.jsonDataa.Person[j + 1] = this.jsonDataa.Person[j];
                    j--;
                }
                this.jsonDataa.Person[j + 1] = temp;
            }
            console.log('Data sorted Successfully by Name.');
            //fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
            async () => { //async await for writing data to json file 
                this.jsonDataa.Person.push(JSON.parseJSON(stringify(newObj)));
                await fs.writeFile('address.json', parseJSON(stringify(this.jsonDataa)));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    printAddressBook = () => { //function to print the address book
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
