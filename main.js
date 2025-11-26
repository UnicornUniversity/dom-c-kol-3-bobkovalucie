//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application.
 * Please, add specific description here for the application purpose.
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
    count: 150,
    age: {
        min: 35,
        max: 85
    }
}

function getRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setEmployeeGender() {
    let genderNumber = getRandom(0,1);
    if (genderNumber === 1) {
        return "male";
    }
    else {
        return "female";
    }

}
function generateName (gender) {
    if(gender === "male"){
        return maleNames[getRandom(0, maleNames.length-1)];
        }
    else{
        return femaleNames[getRandom(0, femaleNames.length-1)];
    }
}

function generateSurname (gender){
    if(gender === "male"){
        return maleSurnames[getRandom(0, maleSurnames.length-1)];
    }

    else{
        return femaleSurnames[getRandom(0, femaleSurnames.length-1)];
    }
}


function setWorkload(){
    return (getRandom(1,4)*10);
}

function generateBirthday(minAge,maxAge){

    let today = new Date()
    let todayInMilliseconds = today.getTime();
    let maxDate = todayInMilliseconds - maxAge*365.25*24*60*60*1000;
    let minDate = todayInMilliseconds - minAge*365.25*24*60*60*1000;

    return new Date(getRandom(minDate,maxDate)).toISOString();
}

function generateEmployee(minAge,maxAge, number){
    let employee = {
        name: "",
        surname: "",
        gender: "",
        birthdate: "",
        workload: "",
    }
    employee.number = number;
    employee.gender = setEmployeeGender();
    employee.name = generateName(employee.gender);
    employee.surname = generateSurname(employee.gender);
    employee.birthdate = generateBirthday(minAge, maxAge);
    employee.workload = setWorkload();

    return employee;
}

export function main(dtoIn) {
    const dtoOut = [

    ]
    for (let i =0; i < dtoIn.count; i++) {
        dtoOut[i] = generateEmployee(dtoIn.age.min, dtoIn.age.max, i);
        for (let j = 0; j < i; j++) {                                            //kontrola stejného jména, přijmení a data narození
            let samePerson = {
                sameName: dtoOut[i].name === dtoOut[j].name,
                sameSurname: dtoOut[i].surname === dtoOut[j].surname,
                sameBirthdate: dtoOut[i].birthdate === dtoOut[j].birthdate,
            }
            if (samePerson.sameName && samePerson.sameSurname && samePerson.sameBirthdate) { // pokud se jedná o stejnou osobu, vygeneruje se osoba na pozici "i" znovu
                dtoOut[i] = generateEmployee(dtoIn.age.min, dtoIn.age.max,i);
                j = -1; // restart kontrolního cyklu for, po ukončení tohoto běhu se automaticky j zvedne na 0, a aby se nově vytvořený zaměstnanace porovnal se všemi už vytvořenými
            }
        }
    }
    return dtoOut;
}
