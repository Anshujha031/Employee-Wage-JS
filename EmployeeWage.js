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

let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee Wage: " + empWage);
