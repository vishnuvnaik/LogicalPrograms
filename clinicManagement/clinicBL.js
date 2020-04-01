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
class Appoint {
    constructor(name, pName, time) {
        this.name = name;
        this.pName = pName;
        this.time = time;
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
class Search {
    constructor() {
        const clinic = fs.readFileSync('clinic.json')
        this.clinicManage = JSON.parse(clinic)
    }
    searchDoc() {
        console.log(' ----- search for a doctor ----- ')
        let search = input.question(' enter the search keyword name/availability/specialisation')
        console.log("1. Search by name\n2. Search by Id\n3. Search by speciality\n4. Search by availability\n");
        var ch = input.questionInt("Enter your choice:");
        switch (ch) {
            case 1:
                for (let i = 0; i < this.clinicManage.doctors.length; i++) {
                    if (this.clinicManage.doctors[i].name == search) {
                        console.log(this.clinicManage.doctors[i]);
                    }
                }
            case 2:
                for (let i = 0; i < this.clinicManage.doctors.length; i++) {
                    if (this.clinicManage.doctors[i].id == search) {
                        console.log(this.clinicManage.doctors[i]);
                    }
                }
            case 3:
                for (let i = 0; i < this.clinicManage.doctors.length; i++) {
                    if (this.clinicManage.doctors[i].specialization == search) {
                        console.log(this.clinicManage.doctors[i]);
                    }
                }
            case 4:
                for (let i = 0; i < this.clinicManage.doctors.length; i++) {
                    if (this.clinicManage.doctors[i].availability == search) {
                        console.log(this.clinicManage.doctors[i]);
                    }
                }

        }
    }
    searchPatient() {
        console.log(' ----- search for a patient ----- ')
        let search = input.question(' enter the search keyword name/id/phone num')
        console.log("1. Search by name\n2. Search by Id\n3. Search by phone num \n");
        var ch = input.questionInt("Enter your choice:");
        switch (ch) {
            case 1:
                for (let i = 0; i < this.clinicManage.patients.length; i++) {
                    if (this.clinicManage.patients[i].name == search) {
                        console.log(this.clinicManage.patients[i]);
                    }
                }
            case 2:
                for (let i = 0; i < this.clinicManage.patients.length; i++) {
                    if (this.clinicManage.patients[i].id == search) {
                        console.log(this.clinicManage.patients[i]);
                    }
                }
            case 3:
                for (let i = 0; i < this.clinicManage.patients.length; i++) {
                    if (this.clinicManage.patients[i].pPhone == search) {
                        console.log(this.clinicManage.patients[i]);
                    }
                }
        }
    }
}
class Appointment {
    constructor() {
        const clinic = fs.readFileSync('clinic.json')
        this.clinicManage = JSON.parse(clinic)
    }
    bookAppointment() {
        try {
            let name = input.question(' enter the name of doctor for appointment')
            if (!isNaN(name)) throw "enter a valid input";
            let pName = input.question(' enter the name of patient ')
            if (!isNaN(pName)) throw "enter a valid input";
            let time = input.question(" AM PM or Both")
            if (!isNaN(time)) throw "enter a valid input";
            let i = -1
            for (let j = 0; j < this.clinicManage.doctors.length; j++) {
                if (this.clinicManage.doctors[j].name == name) {
                    i = j;
                }
            }
            if (i != -1) {
                if (this.clinicManage.doctors[i].noOfAppointment < 5) {
                    if (this.clinicManage.doctors[i].availability == time) {
                        let appObj = new Appoint(name, pName, time)
                        this.clinicManage.clinicAppointment.push(JSON.parse(JSON.stringify(appObj)));
                        fs.writeFileSync('clinic.json', JSON.stringify(this.clinicManage));
                        this.clinicManage.doctors[i].noOfAppointment++;
                        console.log("Appointment booked")
                    }
                    else {
                        console.log("Doctor isn't available in this time")
                    }
                }
                else {
                    console.log('doctors appointments are full ')
                }
            }
            else {
                console.log(" doctor not found ")
            }
            fs.writeFileSync('clinic.json', JSON.stringify(this.clinicManage))
        }
        catch (err) {
            console.log(err)
        }
    }
}
module.exports = {
    AddDoctor, AddPatient, Search, Appointment
}