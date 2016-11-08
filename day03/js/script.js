// var theDate = new Date();
// console.log(theDate);
// console.log(theDate.getFullYear());
// console.log(theDate.toLocaleString('hi', {month: 'long'} ));

var firstName = prompt("What is your first name?: ");
var lastName = prompt("What is your last name?: ");
var theDate = new Date(prompt("What is your date of birth (mm/dd/yyyy)?: "));
 alert(
   firstName +
   " " +
   lastName +
   "'s birthday is " +
   theDate.toLocaleString('us-en', {weekday: 'long'}) + " " +
   theDate.toLocaleString('us-en', {month: 'long'}) + " " +
   theDate.getDate() + ", " +
   theDate.getFullYear() + "."
);
console.log(theDate);
