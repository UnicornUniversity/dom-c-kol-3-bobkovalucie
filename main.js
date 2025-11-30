import {
    generateEmployee
} from './src/generatingFunctions.js';

const dtoIn = {
    count: 50,
    age: {
        min: 35,
        max: 85
    }
};

/**
 * Generates a list of employees with randomly generated data.
 * Every employee has gender, name, surname, birthdate and workload.
 * The birthdate is generated to match the age limit specified in the input (dtoIn.age.min and dtoIn.age.max).
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */

export function main(dtoIn) {
     const dtoOut = [];
    
   // Generate array of all possible days in the age range
    const availableDays = [];
    const minDays = Math.floor(dtoIn.age.min * 365.25);
    const maxDays = Math.floor(dtoIn.age.max * 365.25);
    
    for (let i = minDays; i <= maxDays; i++) { 
        availableDays.push(i);
    }

    
// Generate the requested number of employees
    for (let i = 0; i < dtoIn.count; i++) {
        dtoOut.push(generateEmployee(dtoIn.age.min, dtoIn.age.max, availableDays));
    }
    return dtoOut;
}
