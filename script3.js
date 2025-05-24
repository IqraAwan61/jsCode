function per(eng, urdu, math) {
 return ((eng+urdu+math)*100/300)
    
}
function avg() {
   var val= per()
   return val/3
    
}
function result(){
    console.log(per(50, 45, 90))
    console.log(avg())

}
console.log(result())
// function to calculate every small unit

function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

// given the value of distance
let distanceKm = 2; 
console.log("Meters:", toMeters(distanceKm));
console.log("Feet:", toFeet(distanceKm));
console.log("Inches:", toInches(distanceKm));
console.log("Centimeters:", toCentimeters(distanceKm));
//  calculate power
function calculatePower(a,b){
return a**b
}
console.log(calculatePower(4,5))
// calculating leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


console.log(isLeapYear(2024)); 
console.log(isLeapYear(1900)); 

//  Area of a triangle using two functions

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    let s = calculateS(a, b, c);
    return (s * (s - a) * (s - b) * (s - c));
}


console.log(calculateArea(3, 4, 5)); 