var firstName: string = "John";
var lastName: string = "Smith";
var dateOfBirth = new Date('1991-03-04');
var today: Date = new Date();

console.log(`Greeting ${firstName} ${lastName}...`);

if (today.getMonth() == dateOfBirth.getMonth() &&
    today.getDate() == dateOfBirth.getDate()) {

    for (let i = 0; i < 3; i++) {
        console.log("Happy Birthday!");
    }
}

console.log("Have a wonderful day!");

