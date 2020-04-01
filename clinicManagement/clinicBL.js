const fs = require('fs')
const input = require('readline-sync')
// const clinic = fs.readFileSync('clinic.json')
// let clinicManage = JSON.parse(clinic)
nameRestriction = /[A-z]/g; //for input validation of string
contactRestriction = /[0-9]{6}/g;
mobRes = /[0-9]{10}/g;

class Doctor {
    constructor(id, name, specialisation, availability, noOfAppointment) {
        this.id = id;
        this.name = name;
        this.specialisation = specialisation;
        this.availability = availability;
        this.noOfAppointment = noOfAppointment;

    }
}
class Patient {
    constructor(pId, pName, pPhone, pAge) {
        this.pId = pId;
        this.pName = pName;
        this.pPhone = pPhone;
        this.pAge = pAge;
    }
}
class AddDoctor {
    constructor() {
        const clinic = fs.readFileSync('clinic.json')
        this.clinicManage = JSON.parse(clinic)
    }
    addDoctor() {
        try {
            let name = input.question("Enter name of the doctor:");
            if (!isNaN(name)) throw "enter a valid input";
            let id = input.question("Enter doctor's id:");
            if (isNaN(id)) throw "enter a valid input";
            let specialisation = input.question("Enter doctor's speciality:");
            if (!isNaN(specialisation)) throw "enter a valid input";
            let availability = input.question("Enter availability time of doctor as AM, PM or Both:");
            if (!isNaN(availability)) throw "enter a valid input";
            let noOfAppointment = 0;
            let newObj = new Doctor(name, id, specialisation, availability, noOfAppointment)
            this.clinicManage.doctors.push(JSON.parse(JSON.stringify(newObj)));
            fs.writeFileSync('clinic.json', JSON.stringify(this.clinicManage));
        }
        catch (err) {
            console.log("ERROR  " + err);
        }
    }
}
class AddPatient {
    constructor() {
        const clinic = fs.readFileSync('clinic.json')
        this.clinicManage = JSON.parse(clinic)
    }
}


module.exports = {
    AddDoctor
}