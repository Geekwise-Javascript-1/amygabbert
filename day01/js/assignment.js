//Amy Gabbert 10/31/2016 Javascript 1
var number1 = 12;
var number2 = 30;
//convert 30 to Hexadecimal
var number2Hex = (30).toString(16);
console.log("30 in Hexadecimal = ", number2Hex);
//convert 1e hexadecimal back to decimal
var number2Deci = parseInt(number2Hex, 16);
console.log("1e in Decimal = ", number2Deci);
//add number1 and number2 converted back to decimal
var answer = number1 + number2Deci;
console.log("Answer equals: ", answer);
