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


/*String Object manipulation
*
*/
//var firstname = prompt('Enter your name');
//console.log( firstname.length );
//console.log( firstname.indexOf('a') );
//console.log( firstname.charAt(firstname.length - 1));

//var lastname = prompt('Enter your last name');
//console.log(firstname.concat( ' ').concat(lastname) );
//var name = firstname.concat(' ').concat(lastname);

// console.log(name.substring( 0, firstname.length ));
// console.log( firstname.toLowerCase () );
// console.log ( firstname.toUpperCase() );
// console.log( firstname.trim());

/*Challenge
*
*/
// var firstName = prompt('Please enter your first name: ');
// var lastName = prompt('Please enter your last name: ');
//
// firstName = firstName.toLowerCase();
// lastName = lastName.toLowerCase();
//
// firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1, firstName.length - 1);
// lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1, lastName.length - 1);
// console.log(lastName.charAt(0).toUpperCase() + lastName.substr(1, lastName.length - 1));
// console.log(lastName.charAt(0).toUpperCase() + lastName.substring(1, lastName.length - 1));
//
// console.log(firstName.concat(' ').concat(lastName));

var firstname = prompt('your first name?');
console.log(firstname);
console.log(firstname.length);
console.log(firstname.indexOf('m'));
console.log('substring (2,3) is ', firstname.substring(2, 3));
console.log('substr (2,3) is ', firstname.substr(2, 3));
