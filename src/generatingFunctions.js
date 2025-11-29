import { 
    maleNames, 
    femaleNames, 
    maleSurnames, 
    femaleSurnames 
} from '.src/listsOfNames.js'; 

/**
 * Functions for generating employee data (Name, Surname, Birthdate, Workload, etc.).
 */

/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - the minimum possible value.
 * @param {number} max - the maximum possible value.
 * @returns {number} - the randomly generated integer.
 */
export function getRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Randomly determines the employee's gender.
 * @returns {string} - the generated gender.
 */
export function setEmployeeGender() {
    const genderNumber = getRandom(0,1);
    if (genderNumber === 1) {
        return "male";
    }
    else {
        return "female";
    }
}

/**
 * Returns randomly selected name from the list of male/female names based on the gender.
 * @param {string} gender - the gender of the employee.
 * @returns {string} - the randomly selected first name.
 */
export function generateName (gender) {
    if(gender === "male"){
        return maleNames[getRandom(0, maleNames.length-1)];
        }
    else{
        return femaleNames[getRandom(0, femaleNames.length-1)];
    }
}

/**
 * Returns randomly selected surname from the list of male/female surnames based on the gender.
 * @param {string} gender - the gender of the employee.
 * @returns {string} - the randomly selected surname.
 */
export function generateSurname (gender){
    if(gender === "male"){
        return maleSurnames[getRandom(0, maleSurnames.length-1)];
    }

    else{
        return femaleSurnames[getRandom(0, femaleSurnames.length-1)];
    }
}

/**
 * Randomly determines the employee's workload (10, 20, 30, 40 hours/week).
 * @returns {number} - the generated workload in hours/week.
 */
export function setWorkload(){
    return (getRandom(1,4)*10);  // Multiplies random number (1 to 4) by 10
}

/**
 * Generates a random birthdate within the specified age range, returned as an ISO Date-Time string.
 * @param {number} minAge - minimum age constraint.
 * @param {number} maxAge - maximum age constraint.
 * @returns {string} - the generated birthdate in ISO format.
 */
 export function generateBirthdate(minAge,maxAge){
    const today = new Date()
    const todayInMilliseconds = today.getTime();

    // Calculate time boundaries in milliseconds, use 365.25 to account for leap years
    const maxDate = todayInMilliseconds - maxAge*365.25*24*60*60*1000;  // Max date (oldest possible birthdate, minAge means youngest person)
    const minDate = todayInMilliseconds - minAge*365.25*24*60*60*1000;  // Min date (youngest possible birthdate, maxAge means oldest person)

    return new Date(getRandom(minDate,maxDate)).toISOString(); // Returns random time between min and max date boundaries
}

/**
 * Creates a single Employee object with all fields randomly generated.
 * @param {number} minAge - minimum age constraint.
 * @param {number} maxAge - maximum age constraint.
 * @returns {object} - the generated Employee object.
 */
export function generateEmployee(minAge,maxAge){

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
    employee.birthdate = generateBirthdate(minAge, maxAge);
    employee.workload = setWorkload();

    return employee;
}
