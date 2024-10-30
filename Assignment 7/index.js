/*
qustion 1:

let number = prompt("Enter a number:");
console.log("Output: " + number);
 

question 2:
let number = prompt("Enter a number:");

number = Number(number);

if (number % 3 === 0 && number % 4 === 0) {
    console.log("Yes");
} else {
    console.log("No");
}

question 3:
let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");

number1 = Number(number1);
number2 = Number(number2);

if (number1 > number2) {
    console.log("Output:", number1);
} else {
    console.log("Output:", number2);
}
question 4:
let number = prompt("Enter a number:");

number = Number(number);

if (number < 0) {
    console.log("Output: negative");
} else {
    console.log("Output: positive");
}
qustion5
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
let num3 = parseInt(prompt("Enter third number: "));
let maxElement = Math.max(num1, num2, num3);
let minElement = Math.min(num1, num2, num3);
console.log("max element =", maxElement);
console.log("min element =", minElement);

qustion 6
let number = parseInt(prompt("Enter an integer number: "));

if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}
qustion 7
let char = prompt("Enter a character: ").toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(char + " is a vowel.");
} else {
    console.log(char + " is a consonant.");
}

qustion 8
let number = parseInt(prompt("Enter an integer: "));
for (let i = 1; i <= number; i++) {
    console.log(i);
}


qustion 9
let number = parseInt(prompt("Enter an integer: "));

for (let i = 1; i <= 12; i++) {
    console.log(number * i);
}


qustion 10

let number = parseInt(prompt("Enter an integer: "));

for (let i = 2; i <= number; i += 2) {
    console.log(i);
}


qustion 11
let base = parseInt(prompt("Enter the base number: "));
let exponent = parseInt(prompt("Enter the exponent: "));
let result = Math.pow(base, exponent);
console.log(base + " raised to the power of " + exponent + " is: " + result);


qustion 12
let subject1 = parseInt(prompt("Enter marks for subject 1: "));
let subject2 = parseInt(prompt("Enter marks for subject 2: "));
let subject3 = parseInt(prompt("Enter marks for subject 3: "));
let subject4 = parseInt(prompt("Enter marks for subject 4: "));
let subject5 = parseInt(prompt("Enter marks for subject 5: "));

let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
let averageMarks = totalMarks / 5;
let percentage = (totalMarks / 500) * 100;  

console.log("Total Marks = " + totalMarks);
console.log("Average Marks = " + averageMarks);
console.log("Percentage = " + percentage + "%");


qustion 13
let monthNumber = parseInt(prompt("Enter the month number (1-12): "));
let daysInMonth;

if (monthNumber === 1 || monthNumber === 3 || monthNumber === 5 || monthNumber === 7 || 
    monthNumber === 8 || monthNumber === 10 || monthNumber === 12) {
    daysInMonth = 31;
} else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
    daysInMonth = 30;
} else if (monthNumber === 2) {
    daysInMonth = 28;  
} else {
    console.log("Invalid month number. Please enter a number between 1 and 12.");
}
if (daysInMonth) {
    console.log("Days in Month " + monthNumber + ": " + daysInMonth);
}


qustion 14

let physics = parseInt(prompt("Enter marks for Physics: "));
let chemistry = parseInt(prompt("Enter marks for Chemistry: "));
let biology = parseInt(prompt("Enter marks for Biology: "));
let mathematics = parseInt(prompt("Enter marks for Mathematics: "));
let computer = parseInt(prompt("Enter marks for Computer: "));

let totalMarks = physics + chemistry + biology + mathematics + computer;
let percentage = (totalMarks / 500) * 100; 

if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 40) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log("Total Marks = " + totalMarks);
console.log("Percentage = " + percentage.toFixed(2) + "%");
console.log("Grade = " + grade);


qustion 15
let monthNumber = parseInt(prompt("Enter the month number (1-12): "));
let daysInMonth;

switch (monthNumber) {
    case 1:
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10: 
    case 12:  
        daysInMonth = 31;
        break;
    case 4:  
    case 6:  
    case 9:  
    case 11:  
        daysInMonth = 30;
        break;
    case 2: 
        daysInMonth = 28; 
        break;
    default:
        console.log("Invalid month number. Please enter a number between 1 and 12.");
        break;
}

if (daysInMonth) {
    console.log("Days in Month " + monthNumber + ": " + daysInMonth);
}


qustion 16
let char = prompt("Enter an alphabet: ").toLowerCase();

switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(char + " is a vowel.");
        break;
    default:
        if (char.length === 1 && /[a-z]/.test(char)) {
            console.log(char + " is a consonant.");
        } else {
            console.log("Invalid input. Please enter a single alphabet character.");
        }
        break;
}


qustion 17
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

let maxNumber;

switch (true) {
    case (num1 > num2):
        maxNumber = num1;
        break;
    case (num1 < num2):
        maxNumber = num2;
        break;
    case (num1 === num2):
        maxNumber = num1; 
        console.log("Both numbers are equal.");
        break;
}
console.log("The maximum number is: " + maxNumber);


qustion 18
let number = parseInt(prompt("Enter a number: "), 10);
switch (number % 2) {
    case 0:
        console.log(number + " is even.");
        break;
    case 1:
        console.log(number + " is odd.");
        break;
    default:
        console.log("Invalid input. Please enter a valid number.");
        break;
}


qustion 19
let number = parseFloat(prompt("Enter a number: "));
switch (true) {
    case (number > 0):
        console.log(number + " is positive.");
        break;
    case (number < 0):
        console.log(number + " is negative.");
        break;
    case (number === 0):
        console.log(number + " is zero.");
        break;
    default:
        console.log("Invalid input. Please enter a valid number.");
        break;
}


qustion 20
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let operator = prompt("Enter an operator (+, -): ");

let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    default:
        console.log("Invalid operator. Please enter + or -.");
        break;
}

if (result !== undefined) {
    console.log("Result: " + result);
} 



















*/
