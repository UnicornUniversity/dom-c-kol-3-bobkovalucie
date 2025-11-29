import {
    getRandom,
    setEmployeeGender, 
    generateName,
    generateSurname,
    setWorkload,
    generateBirthdate,
    generateEmployee
} from './src/generatingFunctions.js';

/**
 * Generates a list of employees with randomly generated data. Every employee has its gender, name, surname, birthdate and workload.
 * Number of generated employees is assigned in the input (dtoIn.count)
 * The birthdate is generated to match the age limit specified in the input (dtoIn.age.min and dtoIn.age.max).
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */

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
