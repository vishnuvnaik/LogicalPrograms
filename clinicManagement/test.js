try{
    var drName = read.question("Enter doctor's name:");
    if(!isNaN(drName)) throw "enter a valid input";
    var pName = read.question("Enter patients name:");
    if(!isNaN(pName)) throw "enter a valid input";
    var time = read.question("Enter appointment time as AM, PM or Both:");
    if(!isNaN(time)) throw "enter a valid input";
    let i = -1
    for (key in data.doctor) {
        if (data.doctor[key].drName == drName) {
            i = key;
        }
    }
    if (i != -1) {
        if (data.doctor[i].NoOfAppointment < 5) {
            if (data.doctor[i].availability == time) {
                data.cliniqueAppointment.push({
                    "drName": drName,
                    "pName": pName,
                    "time": time
                })
                data.doctor[i].NoOfAppointment++;
                console.log("Appointment booked")
            }
            else {
                console.log("Doctor isn't available in this time")
            }
        }
        else {
            console.log("Doctor's appointments are full");
        }
    }
    else {
        console.log("Doctor not found")
    }
    file.writeFileSync('clinique.json', JSON.stringify(data));
    this.clinicManagement(data);
}
catch(err)
{
    console.log("ERROR  " + err);
}
}