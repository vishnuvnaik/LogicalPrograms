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
            let id = input.questionInt("Enter doctor's id:");
            if (isNaN(id)) throw "enter a valid input";
            let specialisation = input.question("Enter doctor's speciality:");
            if (!isNaN(specialisation)) throw "enter a valid input";
            let availability = input.question("Enter availability time of doctor as AM, PM or Both:");
            if (!isNaN(availability)) throw "enter a valid input";
            let noOfAppointment = 0;
            let newObj = new Doctor(name, id, specialisation, availability, noOfAppointment)
            this.clinicManage.doctors.push(JSON.parse(JSON.stringify(newObj)));
            fs.writeFileSync('clinic.json', JSON.stringify(this.clinicManage));
            console.log(' entry added ')
        }
        catch (err) {
            console.log(err);
        }
    }
}
class AddPatient {
    constructor() {
        const clinic = fs.readFileSync('clinic.json')
        this.clinicManage = JSON.parse(clinic)
    }
    addPatient() {
        let pName = input.question("Enter name of the patient:");
        if (!isNaN(pName)) throw "enter a valid input";
        let pId = input.questionInt("Enter patient's id:");
        if (isNaN(pId)) throw "enter a valid input";
        let pAge = input.questionInt("Enter patient's age :");
        let pPhone = input.questionInt("Enter the phone num of patient");
        let patientObj = new Patient(pName, pId, pPhone, pAge)
        this.clinicManage.patients.push(JSON.parse(JSON.stringify(patientObj)));
        fs.writeFileSync('clinic.json', JSON.stringify(this.clinicManage));
        console.log('entry added ')
    }
}
module.exports = {
    AddDoctor, AddPatient
}