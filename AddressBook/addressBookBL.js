//const fs = require('fs').promises
const fs = require('fs')
const input = require('readline-sync')
nameRestriction = /[A-z]/g; //for input validation
contactRestriction = /[0-9]/g;
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
            const jsonData = await fs.readFile('address.json');
            this.jsonDataa = JSON.parse(jsonData);
        }
    }
}
class AddressBookFunction extends Person {
    addData = () => {
        try {

            let id = input.questionInt(' enter the id no ')
            let firstName = input.question('enter the name first ')
            while (nameRestriction.test(firstName) == false) {
                firstName = read.question("No special characters Invalid name! :");

            }
            let lastName = input.question('  enter the last name ')
            while (nameRestriction.test(lastName) == false) {
                lastName = read.question("No special characters Invalid name! :");

            }
            let address = input.question('enter the address')
            while (nameRestriction.test(address) == false) {
                address = read.question(" No special characters address! :");

            }
            let city = input.question('enter the city ')
            while (nameRestriction.test(city) == false) {
                city = read.question(" No special characters city! :");

            }
            let state = input.question('enter the state')
            while (nameRestriction.test(state) == false) {
                state = read.question(" No special characters city! :");

            }
            let zip = input.questionInt('enter the zip code ')
            while (contactRestriction.test(zip) == false || zip.length != 6) {
                zip = read.question("Enter the zip code 6 digits only : ");
            }
            let mob = input.questionInt('enter the mobile number ')
            while (contactRestriction.test(zip) == false || mob.length != 10) {
                mob = read.question("Enter the zip code 10 digits only : ");
            }
            let newObj = new Person(id, firstName, lastName, address, city, state, zip, mob)
            //this.jsonDataa.Person.push(JSON.parse(JSON.stringify(newObj)));
            //fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
            async () => {
                this.jsonDataa.Person.push(JSON.parse(JSON.stringify(newObj)));
                await fs.writeFile('address.json', JSON.stringify(this.jsonDataa));
            }
            //     await fs.writeFile('address.json', JSON.stringify(this.jsonDataa));
            // }
            console.log('entry added ')
        }
        catch (err) {
            console.log(Error)
        }
    }
    removeEntry = () => {

        let deleteID = input.questionInt('enter the delete id ')
        let isAvailable = true;
        for (let i = 0; i < this.jsonDataa.Person.length; i++) {
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
        fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
    }
    set editEntry(editID) {

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
        fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
    }
    sortByName() {
        try {
            for (let i = 1; i < this.jsonDataa.person.length; i++) {
                let j = i - 1;
                while (j >= 0 && this.jsonDataa.person[j].firstName > temp.firstName) {
                    this.jsonDataa.person[j + 1] = this.jsonDataa.person[j];
                    j--;
                }
                this.jsonDataa.person[j + 1] = temp;
            }
            console.log('Data sorted Successfully BY Name.');
            fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
        }
        catch (err) {
            console.log(err);
        }
    }
    get printAddressBook() {
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
