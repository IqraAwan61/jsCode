var allLower = userInput.toLowerCase()

x = x.toLowerCase();

y = y.toUpperCase();

let newVar = someVar.toLowerCase(); 


let fruits = ["APPLE", "MANGO"];
lowerFruit = fruits[0].toLowerCase()


alert(myVar.toUpperCase())


var cityName = "kaRacHi";
cityName = cityName[0].toUpperCase() + cityName.slice(1).toLowerCase();

var sameWords = "captain";
var segment = sameWords.slice(1, 3); 

let str = "Hello World";
let numChars = str.length;

var animal = "elephant"; 
var seg = animal.slice(2, 6); 


let name = "banana";

let word = "chocolate";
let len = word.length;
let newStr = word.slice(1, len - 3);

var text = "To be or not to be.";
var indx = text.indexOf("be")

var text = "To be or not to be.";
var indx = text.lastIndexOf("be")

let num = Math.floor(Math.random() * 50) + 1;
console.log(num);
Math.random() 

randomValue = Math.random(); 
console.log(randomValue);


let diceRoll = Math.floor(Math.random() * 6) + 1; // math .ramdom generate number between 1 and 0 and *6 in the range of 6 and add one remove 0 from start and floor removes float value
console.log("Dice rolled:", diceRoll);

let text = "The quick brown fox jumps over the lazy dog";
let lowerText = text.toLowerCase(); 
let words = lowerText.split(" ");   // here split is necessary to brak the complete string into seprate words

let count = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

console.log("Number of occurrences of 'the':", count);

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "!");

let phoneModel = prompt("What is your favorite mobile phone model?");
let length = phoneModel.length;

document.write("My favorite phone is: " + phoneModel + "<br>");
document.write("Length of input: " + length);

let word1 = "Pakistani";
let index = word1.indexOf("n");

document.write("String: " + word1 + "<br>");
document.write("Index of 'n': " + index);