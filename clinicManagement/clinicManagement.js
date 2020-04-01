
const path = require('./clinicBL')
const promises = require('fs').promises
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
    let ch = input.questionInt('enter your choice :- ')
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
