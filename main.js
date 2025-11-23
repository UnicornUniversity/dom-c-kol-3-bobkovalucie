//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */



const dtoIn = {
    count: 50,
    age: {
        min: 19,
        max: 35
    }
}



function getRandom (min, max){
    let randomNumber = undefined;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
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
function generateName (gender){
    let nameNumber;

    if(gender === "male"){
        const maleNames = [
            "Jan", "Petr", "Josef", "Pavel", "Martin", "Tomáš", "Jaroslav", "Miroslav", "Jiří", "Karel", "Lukáš", "Václav", "Ondřej", "Michal", "Roman", "David", "Marek", "Radek", "Jakub", "Zdeněk",  "Stanislav", "František", "Aleš", "Daniel", "Libor", "Vladimír", "Filip", "Adam", "Richard", "Robert", "Štěpán", "Ladislav", "Vojtěch", "Bohumil", "Matěj", "Milan", "Patrik",
            "Rostislav", "Erik", "Jindřich", "Dominik", "Eduard", "Antonín", "Samuel", "Hynek", "Tadeáš", "Oldřich", "Rudolf", "Branislav", "Leoš"
        ];
        nameNumber = getRandom(0,maleNames.length-1);
        return maleNames[nameNumber];
    }
    else{
        const femaleNames = [
            "Marie", "Jana", "Eva", "Anna", "Hana", "Lucie", "Kateřina", "Tereza", "Petra", "Lenka", "Veronika", "Markéta", "Monika", "Alena", "Barbora", "Klára", "Michaela", "Adéla", "Karolína", "Zuzana",
            "Helena", "Eliška", "Kristýna", "Daniela", "Ivana", "Martina", "Šárka", "Dagmar", "Božena", "Nikola", "Renata", "Gabriela", "Simona", "Irena", "Natálie", "Vendula", "Dominika", "Sandra", "Lada", "Radka",
            "Blanka", "Emilie", "Sabina", "Věra", "Andrea", "Stela", "Růžena", "Laura", "Sofie", "Tamara"
        ]
        nameNumber = getRandom(0,femaleNames.length-1);
        return femaleNames[nameNumber]
    }
}
function generateSurname (gender){
    let surnameNumber;

    if(gender === "male"){
        const maleSurnames = [
            "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Marek", "Pospíšil", "Pokorný", "Hájek", "Jelínek",
            "Růžička", "Beneš", "Fiala", "Sedláček", "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Vaněk", "Urban", "Král", "Bartoš", "Kovář", "Kříž", "Šťastný", "Nedvěd", "Malý", "Mach", "Šimek", "Konečný", "Slavík", "Bláha", "Moravec", "Zima",
            "Štěpánek", "Bednář", "Bureš", "Holub", "Sýkora", "Ptáček", "Richter", "Toman", "Musil", "Vlček"
        ];
        surnameNumber = getRandom(0, maleSurnames.length-1);
        return maleSurnames[surnameNumber];
    }
    else{
        const femaleSurnames = [
            "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová", "Marková", "Pospíšilová", "Pokorná", "Hájková", "Jelínková", "Růžičková", "Benešová", "Fialová", "Sedláčková", "Doležalová",
            "Zemanová", "Kolářová", "Navrátilová", "Čermáková", "Vaňková", "Urbanová", "Králová", "Bartošová", "Kovářová", "Křížová", "Šťastná", "Nedvědová", "Malá", "Machová", "Šimková", "Konečná", "Slavíková", "Bláhová", "Moravcová", "Zimová",
            "Štěpánková", "Bednářová", "Burešová", "Holubová", "Sýkorová", "Ptáčková", "Richterová", "Tomanová", "Musilová", "Vlčková"
        ];
        surnameNumber = getRandom(0, femaleSurnames.length-1);
       return femaleSurnames[surnameNumber]
    }
}
function setWorkload(){
    return (getRandom(1,4)*10);
}

function generateBirthday(minAge,maxAge){
/*
    let today = new Date()
    let todayInMilliseconds = today.getTime();
    let maxDate = todayInMilliseconds - maxAge*365.25*24*60*60*1000;
    let minDate = todayInMilliseconds - minAge*365.25*24*60*60*1000;

    return new Date(getRandom(minDate,maxDate));*/



    function getLatestDayOfBirth(minAge){
        let today = new Date();
        let minAgeInDays = 365.25*minAge;       // převedení minimálního možného věku na dny
        let remainingDays = minAgeInDays - minAge*365;       // nastavení zbývajícího počtu dní po odečtení celých roků
        let remainingHours = (remainingDays - Math.floor(remainingDays))*24; // nastavení zbýajícího počtu hodin po odečtení celých dní
        remainingDays = Math.floor(remainingDays);

        let latestBirthDay = new Date();
        latestBirthDay.setFullYear(today.getFullYear()-minAge);        // nejpozdější možný rok narození
        latestBirthDay.setDate(today.getDate()-remainingDays); // nejpozdější možné datum narození - měsíc + den
        latestBirthDay.setHours(today.getHours()-remainingHours); //nejpozdější možná hodina narození

        return latestBirthDay;
    }
    function getEarliestDayOfBirth(maxAge){
        let today = new Date();
        let maxAgeInDays = 365.25*maxAge;       // převedení maximálního možného věku na dny
        let remainingDays = maxAgeInDays - maxAge*365;       // nastavení zbývajícího počtu dní po odečtení celých roků
        let remainingHours = (remainingDays - Math.floor(remainingDays))*24; // nastavení zbýajícího počtu hodin po odečtení celých dní
        remainingDays = Math.floor(remainingDays);

        let earliestBirthDay = new Date();
        earliestBirthDay.setFullYear(today.getFullYear()-maxAge);        // nejdřívější možný rok narození - odečtení celého počtu roků -365 dnů - od dnešního roku,
        earliestBirthDay.setDate(today.getDate()-remainingDays); // nejdřívější datum narození odečtení zbývajícíh dní
        earliestBirthDay.setHours(today.getHours()-remainingHours); //nejdřívější možná hodina naroezní

        return earliestBirthDay;
    }

    let earliestDayOfBirth= getEarliestDayOfBirth(maxAge);
    let latestDayOfBirth = getLatestDayOfBirth(minAge)
    let randomYear = getRandom(earliestDayOfBirth.getFullYear(), latestDayOfBirth.getFullYear() )

    function countOfDaysInMonth(monthIndex){
        return new Date(randomYear, monthIndex, 0).getDate();

    }

    let randomMonth;
    let randomDay;
    let randomHour;

    if (randomYear===earliestDayOfBirth.getFullYear()){
        randomMonth = getRandom(earliestDayOfBirth.getMonth(), 11);
        randomDay = getRandom(earliestDayOfBirth.getDate(), countOfDaysInMonth(randomMonth));
        randomHour = getRandom(earliestDayOfBirth.getHours(), 23);
    }
    else if (randomYear===latestDayOfBirth.getFullYear()){
        randomMonth = getRandom(0, latestDayOfBirth.getMonth());
        randomDay =  getRandom(1, latestDayOfBirth.getDate());
        randomHour = getRandom(0, latestDayOfBirth.getHours());
    }
    else{
        randomMonth = getRandom(0, 11);
        randomDay = getRandom(1,countOfDaysInMonth(randomMonth));
        randomHour = getRandom(0,23)
    }
    return new Date(randomYear, randomMonth, randomDay, randomHour);
}

function generateEmployee(minAge,maxAge){
    let employee = {
        name: "",
        surname: "",
        gender: "",
        birthday: "",
        workload: "",
    }
    employee.gender = setEmployeeGender();
    employee.name = generateName(employee.gender);
    employee.surname = generateSurname(employee.gender);
    employee.birthday = generateBirthday(minAge, maxAge);
    employee.workload = setWorkload();
   return employee;
}

export function main(dtoIn) {
  const dtoOut = [

    ]
    for (let i =0; i < dtoIn.count; i++) {
        dtoOut[i]=generateEmployee(dtoIn.age.min, dtoIn.age.max);
    }
    return dtoOut;
}

