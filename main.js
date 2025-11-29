//TODO add imports if needed
//TODO doc

/**
 * Generates a list of employees with randomly generated data. Every employee has its gender, name, surname, birthdate and workload.
 * Number of generated employees is assigned in the input (dtoIn.count)
 * The birthdate is generated to match the age limit specified in the input (dtoIn.age.min and dtoIn.age.max).
 * It ensures that no two employees share the exact combination of name + surname + birthdate (day/month/year).
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */

const maleNames = [
    "Jan", "Petr", "Josef", "Pavel", "Martin", "Tomáš", "Jaroslav",
    "Miroslav", "Jiří", "Karel", "Lukáš", "Václav", "Ondřej", "Michal",
    "Roman", "David", "Eduard", "Antonín", "Samuel", "Hynek", "Tadeáš",
    "Oldřich", "Rudolf", "Branislav", "Leoš"
];
const femaleNames = [
    "Marie", "Jana", "Eva", "Anna", "Hana", "Lucie", "Kateřina", "Tereza",
    "Petra", "Lenka", "Veronika", "Markéta", "Monika", "Alena", "Barbora",
    "Klára", "Michaela", "Adéla", "Karolína", "Zuzana", "Helena", "Eliška",
    "Kristýna", "Daniela", "Ivana"
];
const maleSurnames = [
    "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera",
    "Veselý", "Horák", "Němec", "Marek", "Pospíšil", "Pokorný", "Hájek",
    "Jelínek", "Růžička", "Beneš", "Fiala", "Sedláček", "Doležal", "Zeman",
    "Kolář", "Navrátil", "Čermák", "Vaněk"
];
const femaleSurnames = [
    "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková",
    "Kučerová", "Veselá", "Horáková", "Němcová", "Marková", "Pospíšilová",
    "Pokorná", "Hájková", "Jelínková", "Růžičková", "Benešová", "Fialová",
    "Sedláčková", "Doležalová", "Zemanová", "Kolářová", "Navrátilová",
    "Čermáková", "Vaňková"
];

const dtoIn = {
    count: 50,
    age: {
        min: 35,
        max: 85
    }
}

// Generates a random integer between min and max (inclusive).
function getRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Randomly determines the employee's gender (male/female).
function setEmployeeGender() {
    const genderNumber = getRandom(0,1);
    if (genderNumber === 1) {
        return "male";
    }
    else {
        return "female";
    }
}

//Returns randomly selected name from the list of male/female names based on the gender.
function generateName (gender) {
    if(gender === "male"){
        return maleNames[getRandom(0, maleNames.length-1)];
        }
    else{
        return femaleNames[getRandom(0, femaleNames.length-1)];
    }
}

//Returns randomly selected surname from the list of male/female surnames based on the gender.
function generateSurname (gender){
    if(gender === "male"){
        return maleSurnames[getRandom(0, maleSurnames.length-1)];
    }

    else{
        return femaleSurnames[getRandom(0, femaleSurnames.length-1)];
    }
}


//Randomly determines the employee's workload in hours/week (10, 20, 30, 40 hours/week).
function setWorkload(){
    return (getRandom(1,4)*10);  // Multiplies random number (1 to 4) by 10
}

//Generates a random birthdate within the specified age range specified in (minAge, maxAge), returned as an ISO Date-Time string.
function generateBirthday(minAge,maxAge){
    const today = new Date()
    const todayInMilliseconds = today.getTime();

    // Calculate time boundaries in milliseconds, use 365.25 to account for leap years
    const maxDate = todayInMilliseconds - maxAge*365.25*24*60*60*1000;  // Max date (oldest possible birthdate, minAge means youngest person)
    const minDate = todayInMilliseconds - minAge*365.25*24*60*60*1000;  // Min date (youngest possible birthdate, maxAge means oldest person)

    return new Date(getRandom(minDate,maxDate)).toISOString(); // Returns random time between min and max date boundaries
}

//Creates a single Employee object with all fields randomly generated.
function generateEmployee(minAge,maxAge){

    // Initial employee object structure
    let employee = {
        name: undefined,
        surname: undefined,
        gender: undefined,
        birthdate: undefined,
        workload: undefined,
    }

    employee.gender = setEmployeeGender();
    employee.name = generateName(employee.gender);
    employee.surname = generateSurname(employee.gender);
    employee.birthdate = generateBirthday(minAge, maxAge);
    employee.workload = setWorkload();

    return employee;
}

//The main function which generates a list of unique employees according to dtoIn data.
export function main(dtoIn) {
    const dtoOut = [
    ]

    // Loop to generate the total required number of employees (dtoIn.count)
    for (let i =0; i < dtoIn.count; i++) {

        // Generate a new employee record
        dtoOut[i] = generateEmployee(dtoIn.age.min, dtoIn.age.max);

        // Inner loop to check the newly generated employee (dtoOut[i]) against all previously generated employees (dtoOut[j] where j < i).
        for (let j = 0; j < i; j++) {

            // Object to store the comparison results
            let samePerson = {
                sameName: dtoOut[i].name === dtoOut[j].name,
                sameSurname: dtoOut[i].surname === dtoOut[j].surname,
                sameBirthdate: {
                    sameDay: new Date(dtoOut[i].birthdate).getDate() === new Date(dtoOut[j].birthdate).getDate(),  // Compare day only
                    sameMonth: new Date(dtoOut[i].birthdate).getMonth() === new Date(dtoOut[j].birthdate).getMonth(), // Compare month only
                    sameYear: new Date(dtoOut[i].birthdate).getFullYear() === new Date(dtoOut[j].birthdate).getFullYear()  // Compare year only
                }
            }

            // Check for duplicity: name and surname and birthdate (D/M/Y).
            if (samePerson.sameName && samePerson.sameSurname && samePerson.sameBirthdate.sameDay && samePerson.sameBirthdate.sameMonth && samePerson.sameBirthdate.sameYear) {

                // Duplicity found: Regenerate the employee at the current position 'i'.
                dtoOut[i] = generateEmployee(dtoIn.age.min, dtoIn.age.max,i);

                // Reset the inner loop counter to -1.
                // When the loop finishes its current iteration, j will become 0, ensuring the newly generated employee is compared against ALL previous employees.
                j = -1;
            }
        }
    }
    return dtoOut;
}
