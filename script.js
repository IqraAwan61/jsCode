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
var a1 = 10, b = 20, c = 30;
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
document.writeln("a) A heading stating “Rules for naming JS variables” \n")
document.writeln("b) Variable names can only contain ______, ______,\n")
 document.writeln("______ and ______.")
 document.writeln("\n")
 document.writeln("For example $my_1stVariable \n")
 document.writeln("c) Variables must begin with a ______, ______ or \n")
document.writeln("_____. For example $name, _name or name \n")
 document.writeln("d) Variable names are case _________")
 document.writeln("Variable names should not be JS _________")

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
// console.log( result);
// let color1, color2, color3,color
// price="xl"
// size1="xl"
// size2="xxl"
// size3="l"
// if(price==size1){
//     console.log("250 ");
    
// }
// else if(price==size2){
//     console.log("300 ");
    
// }
// else{
//     console.log("150 ");
    
// }

// if(num1>num2){
//     console.log(`${num1} is graeter than ${num2}`);
    
// }
// else{
//     console.log(`${num2} is graeter than ${num1}`);
// // }
// let myWord="iqra"
// switch (myWord) {
//     case "iqra":
//         console.log("Hi iqra, How are you!");
        
//         break;

//     default:
//         console.log("Your word is incorrect! :)");
    
// }
// // confirm("your age is graeter than 18")
// // console.error("your age is graeter than 18");
// let myArray =["ali", "ahmed"]
//  console.log(  myArray[1].toUpperCase());
// //  in c++ it will give you a random value u need to use for loop
//  console.log(myArray.length-2);
   // Task 1: Addition
   let num1 = 5;
   let num2 = 3;
   let sum = num1 + num2;
   document.write(" <h1>THE Sum of " + num1 + " and " + num2 + " is " + sum + " <h1> ");

   // Task 2: Subtraction, Multiplication, Division & Modulus
   let sub = num1 - num2;
   let mul = num1 * num2;
   let div = num1 / num2;
   let mod = num1 % num2;
   document.writeln(sub );
   document.writeln(mul );
   document.writeln( div );
   document.writeln(mod );

   // Task 3: Math Expressions
   let a;
 
   a = 5;
   document.writeln("<h3>Initial value: " + a + "</h3>");
   a++;
   document.writeln("<h3>Value after increment is: " + a + "</h3>");
   a += 7;
   document.writeln("<h3>Value after addition is: " + a + "</h3>");
   a--;
   document.writeln("<h3>Value after decrement is: " + a + "</h3>");
   let remainder = a % 3;
   document.writeln( remainder);

   // Task 4: Movie Ticket Cost
   let ticketPrice = 600;
   let totalCost = ticketPrice * 5;
   document.writeln("<h3>4. Total cost to buy 5 tickets to a movie is " + totalCost + " PKR</h3>");

   // Task 5: Multiplication Table
   let tableNumber = 4;
   document.writeln("<h3>5. Multiplication Table of " + tableNumber + "</h3>");
   for (let i = 1; i <= 10; i++) {
     document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
   }

   // Task 6: Temperature Converter
   // a. Celsius to Fahrenheit
   let celsius = 25;
   let fahrenheit = (celsius * 9 / 5) + 32;
   document.writeln("<h3>6. " + celsius + "°C is " + fahrenheit + "°F</h3>");

   // b. Fahrenheit to Celsius
   fahrenheit = 70;
   celsius = (fahrenheit - 32) * 5 / 9;
   document.writeln("<h3>" + fahrenheit + "°F is " + celsius.toFixed(1) + "°C</h3>");
  //  maths expression
  
  
  // Task 3: Greet the user
  let userName = prompt("Enter your name:");
  document.writeln("<h3>3. Hello, " + userName + "! Welcome to your js output.</h3>");

  // Task 4+5: Multiplication Table from user input
  let tableInput = prompt("Enter a number for multiplication table:");
  let tableNum = tableInput ? tableInput : 5;
  document.writeln("<h3>5. Multiplication Table of " + tableNum + "</h3>");
  for (let i = 1; i <= 10; i++) {
    document.writeln(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
  }

  // Task 6:
  // a) Subject names
  let subject1 = prompt("Enter name of subject 1:");
  let subject2 = prompt("Enter name of subject 2:");
  let subject3 = prompt("Enter name of subject 3:");

  // b) Total marks
  let totalMarksPerSubject = 100;

  // c & d) Obtained marks
  let obtained1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
  let obtained2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
  let obtained3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

  // e) Calculations
  let totalMarks = totalMarksPerSubject * 3;
  let totalObtained = obtained1 + obtained2 + obtained3;
  let percentage = (totalObtained / totalMarks) * 100;

  // Display results in a table
  document.writeln("<h3>6. Marks Sheet</h3>");
  document.writeln("<table border='1' cellpadding='10'>");
  document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.writeln("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td></tr>");
  document.writeln("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td></tr>");
  document.writeln("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td></tr>");
  document.writeln("<tr><th colspan='2'>Total</th><th>" + totalObtained + "/" + totalMarks + "</th></tr>");
  document.writeln("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
  document.writeln("</table>");
  // working with prompt
  
    // Task 1: Prompt for first name
    let firstName = prompt("Enter first name");

    // Task 2: Prompt with default value
    let country = prompt("Country?", "China");

    // Task 3: Corrected statement
    let yourName = prompt("Enter Your Name");

    // Task 4: Prompt with string message and default input
    let color = prompt("What's your favorite color?", "Blue");

    // Task 5: Use variables for prompt message and default
    let msg = "What's your favorite fruit?";
    let defaultFruit = "Mango";
    let userFruit = prompt(msg, defaultFruit);

    // Task 6: Prompt with message + default, then show alert
    let city = prompt("Enter your city", "Karachi");
    alert("You entered: " + city);





