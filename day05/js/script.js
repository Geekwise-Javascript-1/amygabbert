

// function myName(){
//   var firstName = 'Janice';
//   var middleName = 'Sylvia';
//   var lastName = 'Louis';
//
//   //return firstName;
// }

//Immediately Invoked Function Executable (IIFE)
// ( function(){
//   var firstName = 'Janice';
//   var middleName = 'Sylvia';
//   var lastName = 'Louis';
//
//   console.log(firstName);
// }() );

// function getNums(){
//   var a = parseInt(prompt('Please enter a number: '));
//   var b = parseInt(prompt('Pick another number: '));
//   console.log(doMath (a, b));
//
// };
//
// function doMath(num2, num1){
//   return num1+num2;
//
// };
// getNums();
//Class Challenge: create 2 functions: a declaration and an IIFE
// function movie(m){
//   var favoriteMovie = 'my favorite movie is: ';
//   return favoriteMovie + ' ' + m;
// };
//
//
// ( function (){
//   var mymovie = prompt('What is your favorite movie?: ');
//   movie(mymovie);
//   alert(movie(mymovie));
//
// }() );

//LOOPS
//For LOOP

// var fruits = ['apple', 'banana', 'mango', 'papaya', 'pineapple','starfruit', 'grapes', 'tangerine', 'persimmon'];
// console.log(fruits);
//
// for(var i = 0; i<fruits.length; i++){
//   //console.log(i);
//   console.log(fruits[i]);
//
// }

// var monsters = ['vampire', 'ghost', 'werewolf', 'witch', 'zombie'];
// var strength = [25, 50, 100, 125, 150];

// for (var i=0; i<monsters.length; i++){
//   console.log(monsters[i] + ' has a strength of ' + strength[i]);
//}

//WHILE LOOP
// var text = '';
// var i = 0;
// while (i<fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }
var monsters = ['vampire', 'ghost', 'werewolf', 'witch', 'zombie'];
var strength = [25, 50, 100, 125, 150];
var i=0;
while (i<monsters.length){
  console.log(monsters[i] + " has strength of " + strength[i]);
  i++;
}
