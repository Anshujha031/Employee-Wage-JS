//uc 1
const IS_PRESENT = 1;
let empCheck = Math.floor((Math.random()* 10) % 2); 

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}

//uc 2
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;


let empHours = 0;

switch (empCheck) {
    case PART_TIME:
        empHours = PART_TIME_HOURS;
        break;
    case FULL_TIME:
        empHours = FULL_TIME_HOURS;
        break;
    default:
        empHours = 0; 
}




// uc 3
function getWorkHours(empCheck) {
    switch (empCheck) {
        case PART_TIME:
            return PART_TIME_HOURS;
        case FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0; // No Time (Absent)
    }
}

empHours = getWorkHours(empCheck);
let empWage = empHours * WAGE_PER_HOUR;

console.log("Employee Wage: " + empWage);

//uc 4
const WORKING_DAYS_IN_MONTH = 20;
let totalEmpWage = 0;

for (let day = 0; day < WORKING_DAYS_IN_MONTH; day++) {
    let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    let empHours = getWorkHours(empCheck);
    totalEmpWage += empHours * WAGE_PER_HOUR;
}

console.log("Total Employee Wage for the Month: " + totalEmpWage);

//uc 5
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let totalEmpHours = 0;
let totalWorkingDays = 0;

while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    totalEmpHours += getWorkHours(empCheck);
}


console.log("Total Working Days: " + totalWorkingDays);
console.log("Total Working Hours: " + totalEmpHours);
console.log("Total Employee Wage: " + totalEmpWage);

//uc 6

let dailyWagesArray = [];
while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    let empHours = getWorkHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;
    dailyWagesArray.push(dailyWage); // Store daily wage in array
    totalEmpHours += empHours;
}

let totalEmpWageArray = totalEmpHours * WAGE_PER_HOUR;
console.log("Daily Wages: ", dailyWagesArray);
console.log("Total Employee Wage: $" + totalEmpWageArray);


//uc 7
let dailyWageMap = new Map();

while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    let empHours = getWorkHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;
    dailyWagesArray.push(dailyWage);
    dailyWageMap.set(totalWorkingDays, dailyWage); // Store day-wise wages in a Map
    totalEmpHours += empHours;
}

// a. Calculate total wage using reduce method
let totalWage = dailyWagesArray.reduce((total, wage) => total + wage, 0);
console.log("Total Employee Wage: $" + totalWage);

// b. Show the Day along with Daily Wage using map
let dailyWageWithDay = dailyWagesArray.map((wage, index) => `Day ${index + 1}: $${wage}`);
console.log("Day-wise Wages:", dailyWageWithDay);

// c. Show Days when Full-time wage (160) was earned using filter
let fullTimeWageDays = [...dailyWageMap.entries()]
    .filter(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
    .map(([day, wage]) => `Day ${day}`);
console.log("Days with Full-time Wage:", fullTimeWageDays);

// d. Find first occurrence when Full Time Wage was earned using find
let firstFullTimeWageDay = [...dailyWageMap.entries()]
    .find(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("First Full-time Wage Day:", firstFullTimeWageDay ? `Day ${firstFullTimeWageDay[0]}` : "Not Found");

// e. Check if every element in Full-time Wage array holds Full-time wage
let isEveryFullTimeWage = dailyWagesArray.every(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is Every Day a Full-time Wage Day?:", isEveryFullTimeWage);

// f. Check if there is any Part-time Wage using some function
let hasPartTimeWage = dailyWagesArray.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part-time Wage?:", hasPartTimeWage);

// g. Find number of days the Employee Worked (days with non-zero wage)
let totalDaysWorked = dailyWagesArray.filter(wage => wage > 0).length;
console.log("Total Days Employee Worked:", totalDaysWorked);
