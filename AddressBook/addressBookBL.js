const fs = require('fs')
const input = require('readline-sync')
try {


    class Person {
        constructor() {
            this.id = this.id;
            this.firstName = this.firstName;
            this.lastName = this.lastName;
            this.Address = this.Address;
            this.City = this.City;
            this.State = this.State;
            this.Zip = this.Zip;
            this.Mob = this.Mob;
        }
    }
    class AddressBookFunction {
        addData() {
            try {
                let id = input.questionInt(' enter the id no ')
                var firstName = input.question('enter the name first ')
                var lastName = input.question('  enter the last name ')
                var Address = input.question('enter the address')
                var City = input.question('enter the city ')
                var State = input.question('enter the state')
                var Zip = input.questionInt('enter the zip code ')
                var Mob = input.questionInt('enter the mobile number ')
                let newObj = new Person(id, firstName, lastName, Address, City, State, Zip, Mob)
                this.jsonDataa.Person.push(JSON.parse(JSON.stringify(newObj)));
                fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
            }
            catch (err) {
                console.log(error)
            }
        }
        removeEntry() {
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
            fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
        }
        editEntry(editID) {

            let isAvailable = false;
            editID = input.questionInt('enter the id to edit')
            for (let i = 0; i < this.jsonDataa.Person.length; i++) {
                if (this.jsonDataa[i].id == editID) {
                    let editAddress = input.question(' enter the new address ')
                    let editCity = input.question(' enter the new city ')
                    let editZip = input.questionInt(' enter the new zip ')
                    let editMob = input.questionInt('enter the new mobile number')
                    this.jsonDataa.person[i].Address = editAddress;
                    this.jsonDataa.person[i].City = editCity;
                    this.jsonDataa.person[i].Zip = editZip;
                    this.jsonDataa.person[i].Mob = editMob;
                    isAvailable = true;
                }
            }
            if (isAvailable == true) {
                console.log(" edited ")
            }
            fs.writeFileSync('address.json', JSON.stringify(this.jsonDataa));
        }
    }
    class AddressExt extends AddressBookFunction { //Inhertitance implementation
        constructor() {
            super() //Super keyword for calling above class constructor
            let jsonData = fs.readFileSync('address.json');
            this.jsonDataa = JSON.parse(jsonData);
        }
    }

    module.exports = {
        AddressExt
    }
} catch (error) {
    console.log(error)
}