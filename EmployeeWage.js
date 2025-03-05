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