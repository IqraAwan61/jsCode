// alert("IQRA");
// alert("AWAN");
// alert("BIBIIQRA33@GMAIL.COM");
// alert("8097346820736");
// alert("IQRA1234");
// alert("You're learning JavaScript!");
// alert("Hello, i am displaying my alert message using JavaScript!");
// let myFavoriteColor = "blue";
// let luckyNumber;
// luckyNumber = "Seven";
// let teamName = "Code Warriors";
// alert(teamName);
// var bestMan = "Charlie";
// bestMan = "Jordan";
// let caseQty;
// caseQty = 144;
// var num = 9;
// let total;
// total = 50 + 25;
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// console.log(orderTotal);

// let initialValue = 20; // Declared and assigned a number
// initialValue = initialValue + 15;
var a1 = 10,
  b = 20,
  c = 30;
// legal variable
// var userName;
var _total;
var $price;
var first_name;
var number123;
// illegal
// var 123number;    // Starts with a number
// var var;          // Reserved keyword
// var user-name;    // Hyphen not allowed
// var my variable;  // Space not allowed
// var !total;
document.writeln("a) A heading stating “Rules for naming JS variables” \n");
document.writeln("b) Variable names can only contain ______, ______,\n");
document.writeln("______ and ______.");
document.writeln("\n");
document.writeln("For example $my_1stVariable \n");
document.writeln("c) Variables must begin with a ______, ______ or \n");
document.writeln("_____. For example $name, _name or name \n");
document.writeln("d) Variable names are case _________");
document.writeln("Variable names should not be JS _________");

//chapter 6 to 9
// var a = 2, b = 1;

// document.write(--a ,"\n");
// document.write(--a - --b,"\n")
// document.write(--a - --b + ++b,"\n")
// document.write(--a - --b + ++b + b--)
// var num=10
// var num2=20
// console.log(num1**num2);
// const name="iqra awan"
// document.writeln([name.length-1]);
// const string="apna college"
// let number=1234
// let add=string+number
// // let result="The addition of a string and number is"+ add + "this"

// let result=`The addition of a string and number is : ${add}  the value is ${add} this`

// // template literal reducesd the + and ""``
// // console.log( result);
// // let color1, color2, color3,color
// // price="xl"
// // size1="xl"
// // size2="xxl"
// // size3="l"
// // if(price==size1){
// //     console.log("250 ");

// // }
// // else if(price==size2){
// //     console.log("300 ");

// // }
// // else{
// //     console.log("150 ");

// // }

// // if(num1>num2){
// //     console.log(`${num1} is graeter than ${num2}`);

// // }
// // else{
// //     console.log(`${num2} is graeter than ${num1}`);
// // // }
// // let myWord="iqra"
// // switch (myWord) {
// //     case "iqra":
// //         console.log("Hi iqra, How are you!");

// //         break;

// //     default:
// //         console.log("Your word is incorrect! :)");

// // }
// // // confirm("your age is graeter than 18")
// // // console.error("your age is graeter than 18");
// // let myArray =["ali", "ahmed"]
// //  console.log(  myArray[1].toUpperCase());
// // //  in c++ it will give you a random value u need to use for loop
// //  console.log(myArray.length-2);
//    // Task 1: Addition
//    let num1 = 5;
//    let num2 = 3;
//    let sum = num1 + num2;
//    document.write(" <h1>THE Sum of " + num1 + " and " + num2 + " is " + sum + " <h1> ");

//    // Task 2: Subtraction, Multiplication, Division & Modulus
//    let sub = num1 - num2;
//    let mul = num1 * num2;
//    let div = num1 / num2;
//    let mod = num1 % num2;
//    document.writeln(sub );
//    document.writeln(mul );
//    document.writeln( div );
//    document.writeln(mod );

//    // Task 3: Math Expressions
//    let a;

//    a = 5;
//    document.writeln("<h3>Initial value: " + a + "</h3>");
//    a++;
//    document.writeln("<h3>Value after increment is: " + a + "</h3>");
//    a += 7;
//    document.writeln("<h3>Value after addition is: " + a + "</h3>");
//    a--;
//    document.writeln("<h3>Value after decrement is: " + a + "</h3>");
//    let remainder = a % 3;
//    document.writeln( remainder);

//    // Task 4: Movie Ticket Cost
//    let ticketPrice = 600;
//    let totalCost = ticketPrice * 5;
//    document.writeln("<h3>4. Total cost to buy 5 tickets to a movie is " + totalCost + " PKR</h3>");

//    // Task 5: Multiplication Table
//    let tableNumber = 4;
//    document.writeln("<h3>5. Multiplication Table of " + tableNumber + "</h3>");
//    for (let i = 1; i <= 10; i++) {
//      document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
//    }

//    // Task 6: Temperature Converter
//    // a. Celsius to Fahrenheit
//    let celsius = 25;
//    let fahrenheit = (celsius * 9 / 5) + 32;
//    document.writeln("<h3>6. " + celsius + "°C is " + fahrenheit + "°F</h3>");

//    // b. Fahrenheit to Celsius
//    fahrenheit = 70;
//    celsius = (fahrenheit - 32) * 5 / 9;
//    document.writeln("<h3>" + fahrenheit + "°F is " + celsius.toFixed(1) + "°C</h3>");
//   //  maths expression

//   // Task 3: Greet the user
//   let userName = prompt("Enter your name:");
//   document.writeln("<h3>3. Hello, " + userName + "! Welcome to your js output.</h3>");

//   // Task 4+5: Multiplication Table from user input
//   let tableInput = prompt("Enter a number for multiplication table:");
//   let tableNum = tableInput ? tableInput : 5;
//   document.writeln("<h3>5. Multiplication Table of " + tableNum + "</h3>");
//   for (let i = 1; i <= 10; i++) {
//     document.writeln(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
//   }

//   // Task 6:
//   // a) Subject names
//   let subject1 = prompt("Enter name of subject 1:");
//   let subject2 = prompt("Enter name of subject 2:");
//   let subject3 = prompt("Enter name of subject 3:");

//   // b) Total marks
//   let totalMarksPerSubject = 100;

//   // c & d) Obtained marks
//   let obtained1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
//   let obtained2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
//   let obtained3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

//   // e) Calculations
//   let totalMarks = totalMarksPerSubject * 3;
//   let totalObtained = obtained1 + obtained2 + obtained3;
//   let percentage = (totalObtained / totalMarks) * 100;

//   // Display results in a table
//   document.writeln("<h3>6. Marks Sheet</h3>");
//   document.writeln("<table border='1' cellpadding='10'>");
//   document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//   document.writeln("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td></tr>");
//   document.writeln("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td></tr>");
//   document.writeln("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td></tr>");
//   document.writeln("<tr><th colspan='2'>Total</th><th>" + totalObtained + "/" + totalMarks + "</th></tr>");
//   document.writeln("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
//   document.writeln("</table>");
//   // working with prompt

//     // Task 1: Prompt for first name
//     let firstName = prompt("Enter first name");

//     // Task 2: Prompt with default value
//     let country = prompt("Country?", "China");

//     // Task 3: Corrected statement
//     let yourName = prompt("Enter Your Name");

//     // Task 4: Prompt with string message and default input
//     let color = prompt("What's your favorite color?", "Blue");

//     // Task 5: Use variables for prompt message and default
//     let msg = "What's your favorite fruit?";
//     let defaultFruit = "Mango";
//     let userFruit = prompt(msg, defaultFruit);

//     // Task 6: Prompt with message + default, then show alert
//     let city = prompt("Enter your city", "Karachi");
//     alert("You entered: " + city);
// working with arrays
//   let myvar="ali khan"
// document.writeln(`<h1> the length of myvar is ${myvar}</h1>`)

//   var myArr=[1,"ali","ahmed"]
//   var newArr=[23,45,67,78]
//   myArr[0]="iqra"
//   myArr.unshift(1,2, "sani", 4,6)
//   console.log(myArr.includes("sani"));
//   console.log(myArr.concat(newArr));
//   console.log(newArr.reverse());

//   document.writeln(` <h1>${newArr.splice(1,2,"ali",5,7,8,0)}</h1> `)
//   document.writeln(`${newArr}`)
//   document.writeln(`<h1>  i am doing slicing of myArr ${myArr.slice(-3)} </h1>`)
//   var myArray=["january", "july","march", "august"]

//  console.log (`${myArray.splice(1,1,"june")}>`);

//  document.writeln(`${myArray}`)
//
// Compare Two Integers

// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//     console.log(`${num1} is larger than ${num2}.`);
// } else if (num2 > num1) {
//     console.log(`${num2} is larger than ${num1}.`);
// } else {
//     console.log("Both integers are equal.");
// }
// // Check if a Number is Positive, Negative, or Zero

// let number = parseInt(prompt("Enter a number:"));

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }
// // Check if a Character is a Vowel

// let character = prompt("Enter a character:");

// if (character.length === 1) {
//     let lowerChar = character.toLowerCase();
//     if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//         console.log(true); // It's a vowel
//     } else {
//         console.log(false); // It's not a vowel
//     }
// } else {
//     console.log("Please enter a single character.");
// }
// // 5. Password Validation

// let correctPassword = "iqra123"; // Store the correct password
// let userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password");
// }
// // 6. Fix the if/else Statement
// // Here's the corrected version of the if/else statement:

// javascript
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);

//   // document.writeln( `<h1> the length of myarr is ${myArr} </h1>`);
//   //

// let emptyArray = [];

// let stringArray = ["hello"];

// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]); // Index of "j" is 2

// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// alert(alphabet.length); // Total length of the array

// let singleElementArray = ["first"];
// singleElementArray[1] = "second"; // Add second element using index
// alert(singleElementArray[1]); // Alert the new element

// let oneElementArray = ["initial"];
// oneElementArray.push("addedElement");
// alert(oneElementArray[oneElementArray.length - 1]); // Last element

// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop(); // Removes "k"
// console.log(Alphabet); // Remaining array

// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.push(5); // Adds number 5
// console.log(Alphabet); // Updated array

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift(); // Removes "S"
// console.log(sizes); // Remaining array

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3); // Adds numbers at the beginning
// console.log(sizes); // Updated array

// let singleElementArray = ["first"];
// singleElementArray.unshift("newFirst"); // Adds new element to the beginning
// alert(singleElementArray[0]); // Alert the new first element

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L"); // Inserts "L" at index 2
// console.log(sizes); // Updated array

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3); // Copies first 3 elements
// console.log(regSizes); // New array

// javascript
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 3, "parrot", "rabbit"); // Removes and adds elements
// console.log(pets); // Updated array

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2); // Removes "cat" and "ox"
// console.log(pets); // Updated array

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducedPets = pets.slice(3, 5); // return "duck" and "frog"
// console.log(reducedPets); // New array

var presentInClass = ["ali", "ahmed", "zain", "hira", "sadia"];
var absentInClass = ["sehar", "samiya", "ahsan", "raza"];
var clearInExams = ["ahmed", "zain", "hira", "sadia"];
var studentName = prompt("Enter your name :");
for (var i = 0; i <= presentInClass.length; i++) {
  if (studentName == presentInClass[i]) {
    document.writeln(
      `<h1>you are present in a class ${presentInClass[i]} </h1>`
    );
  }
}
for (var i = 0; i <= clearInExams.length; i++) {
  if (studentName == clearInExams[i]) {
    document.writeln(
      `<h1>you are present in a class ${clearInExams[i]} you are also clear in exam </h1>`
    );
  }
}
for (var i = 0; i <= absentInClass.length; i++) {
  if (studentName == absentInClass[i]) {
    document.writeln(`<h1>you are absent in a class ${absentInClass[i]} </h1>`);
  }
}
// chapter 17 to 20 work
let empArr = [[], [], []];

let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
]


// second part
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// third
let tableNumber = +prompt("Enter table number:");
let tableLength = +prompt("Enter table length:");

for (let i = 1; i <= tableLength; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}
// fourth
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("Counting:");
for (let i = 1; i <= 15; i++) {
  console.log(i + ", ");
  
}

console.log("\nReverse counting:");
for (let i = 10; i >= 1; i--) {
  console.log(i + ", ");
}

// Even
console.log("\nEven:");
for (let i = 0; i <= 20; i += 2) {
  console.log(i + ", ");
}

// Odd
console.log("\nOdd:");
for (let i = 1; i < 20; i += 2) {
  console.log(i + ", ");
}

// Series
console.log("\nSeries:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i + ",k ");
}

let Arr = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();

if (Arr.includes(userInput)) {
  alert(`${userInput} is available at index ${Arr.indexOf(userInput)} in our bakery.`);
} else {
  alert(`We are sorry. ${userInput} is not available in our bakery.`);
}

let Arr1 = [24, 53, 78, 91, 12];
let largest = A[0];

for (let i = 1; i < Arr1.length; i++) {
  if (Arr1[i] > largest) {
    largest = Arr1[i];
  }
}
console.log("The largest number is:", largest);

let A = [24, 53, 78, 91, 12];
let smallest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}
console.log("The smallest number is:", smallest);

for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}
