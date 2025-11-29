import {
    getRandom,
    setEmployeeGender,
    generateName, 
    generateSurname, 
    setWorkload,
    generateBirthDay
 } from ¸'./src/generatingFunctions.js'

/**
 * Generates a list of employees with randomly generated data. Every employee has its gender, name, surname, birthdate and workload.
 * Number of generated employees is assigned in the input (dtoIn.count)
 * The birthdate is generated to match the age limit specified in the input (dtoIn.age.min and dtoIn.age.max).
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


export function main(dtoIn) {
    const dtoOut = [
    ]

    // Loop to generate the total required number of employees (dtoIn.count)
    for (let i =0; i < dtoIn.count; i++) {

        // Generate a new employee record
        dtoOut[i] = generateEmployee(dtoIn.age.min, dtoIn.age.max);

    }
    return dtoOut;
}

console.log(main(dtoIn));
