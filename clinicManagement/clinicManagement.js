/***************************************************************
 * @Execution : default node : cmd> clinicManagement.js
 * @Purpose : To implement clinic management system
 * @description : To add patients and doctors,search patients and doctors,book for appointment
 * @overview : Clinic managament system
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/

const path = require('./clinicBL')
const fs = require('fs').promises
let input = require('readline-sync')
async () => {
    const jsonData = await fs.readFile('clinic.json')
    let clinicData = JSON.parse(jsonData);
}
let addDoc = new path.AddDoctor;
let addPat = new path.AddPatient;
let searchDP = new path.Search;
let bookApp = new path.Appointment;
try {
    console.log("1. Add doctor \n2. Add patient\n3. Search doctor\n4. Search patient\n5. Take appointment\n6. Exit\n");
    let ch = input.questionInt('enter your choic')
    switch (ch) {
        case 1:
            addDoc.addDoctor();
            break;
        case 2:
            addPat.addPatient();
            break;
        case 3:
            searchDP.searchDoc();
            break;
        case 4:
            searchDP.searchPatient();
            break;
        case 5:
            bookApp.bookAppointment();
            break;
        case 6:
            process.exit(0);
        default:
            console.log("invalid");
    }
}
catch (error) {
    console.log(error)
}
