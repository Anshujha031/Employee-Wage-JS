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
    let empCheck = Math.floor(Math.random() * 3); 
    let empHours = getWorkHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;
    dailyWagesArray.push(dailyWage);
    dailyWageMap.set(totalWorkingDays, dailyWage); 
    totalEmpHours += empHours;
}

// Calculate total wage using reduce method
let totalWage = dailyWagesArray.reduce((total, wage) => total + wage, 0);
console.log("Total Employee Wage: $" + totalWage);

// Show the Day along with Daily Wage using map
let dailyWageWithDay = dailyWagesArray.map((wage, index) => `Day ${index + 1}: $${wage}`);
console.log("Day-wise Wages:", dailyWageWithDay);

//  Show Days when Full-time wage (160) was earned using filter
let fullTimeWageDays = [...dailyWageMap.entries()]
    .filter(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
    .map(([day, wage]) => `Day ${day}`);
console.log("Days with Full-time Wage:", fullTimeWageDays);

// Find first occurrence when Full Time Wage was earned using find
let firstFullTimeWageDay = [...dailyWageMap.entries()]
    .find(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("First Full-time Wage Day:", firstFullTimeWageDay ? `Day ${firstFullTimeWageDay[0]}` : "Not Found");

//  Check if every element in Full-time Wage array holds Full-time wage
let isEveryFullTimeWage = dailyWagesArray.every(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is Every Day a Full-time Wage Day?:", isEveryFullTimeWage);

//  Check if there is any Part-time Wage using some function
let hasPartTimeWage = dailyWagesArray.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part-time Wage?:", hasPartTimeWage);

//  Find number of days the Employee Worked (days with non-zero wage)
let totalDaysWorked = dailyWagesArray.filter(wage => wage > 0).length;
console.log("Total Days Employee Worked:", totalDaysWorked);


// uc 8
while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    let empHours = getWorkHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;
    dailyWageMap.set(totalWorkingDays, dailyWage); // Store day-wise wage in Map
    totalEmpHours += empHours;
}


let totalWage1 = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);

console.log("Day-wise Wages:", dailyWageMap);
console.log("Total Employee Wage: $" + totalWage1);

//uc 9
let dailyHourMap = new Map();

while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    let empHours = getWorkHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;
    
    dailyWageMap.set(totalWorkingDays, dailyWage); // Store Day -> Daily Wage
    dailyHourMap.set(totalWorkingDays, empHours); // Store Day -> Daily Hours

    totalEmpHours += empHours;
}

//Calculate total wage and total hours worked using arrow functions

let totalHoursWorked = Array.from(dailyHourMap.values()).reduce((total, hours) => total + hours, 0);

console.log("Total Employee Wage: " + totalWage);
console.log("Total Hours Worked: ", totalHoursWorked);

//Show the full working days, part working days, and no working days using filter
let fullWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === FULL_TIME_HOURS).map(([day]) => `Day ${day}`);
let partWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === PART_TIME_HOURS).map(([day]) => `Day ${day}`);
let noWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === 0).map(([day]) => `Day ${day}`);

console.log("Full Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("No Working Days:", noWorkingDays);


//uc 10

let empDailyRecords = []; // Array to store objects
while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
   
    let empHours = getWorkHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;

 
    let dailyRecord = {
        day: totalWorkingDays,
        hoursWorked: empHours,
        wageEarned: dailyWage
    };

    empDailyRecords.push(dailyRecord);
    totalEmpHours += empHours;
}


console.log("Employee Daily Records:", empDailyRecords);