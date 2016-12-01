/*
*
*function declaration
*
*/
//helloWorldDec();
// function helloWorldDec(){
//   alert('Hello World');
//
// }

 /*
 *
 *function Expression
 *
 */


// var helloWorldExp = function(){
//   alert('Hello World Again');
// }();

/* 3 function declarations
*
*/
// function greeting (){
//   alert('Welcome!');
// }
// greeting();
//
// function calculate (){
//
//   alert(1+1);
//
// }
// calculate();
//
// function color(){
//   array1 = ["yellow", "blue", "green"];
//   console.log(array1);
//
// };
// color();

/*
*Function Expressions
*/

// var greetings = function(){
//   alert('Bienvenue!');
//
// }();
//
// var numbers = function(){
//   alert(3+99);
// }();
//
// var colors = function(){
//   array2 = ["purple", "magenta", "cyan"];
//   console.log(array2);
// }();

/*
*
*Parameters and Arguments
*
*/
//Parameter is a variable you're declaring
// function helloDec(name, age){
//   alert('hello ' + name);
// }
// helloDec('pratima');
//
// var helloExp = function(first, last){
//   alert('hi '+ first + ' ' + last);
// };
// helloExp('alvin', 'smith');

// function greeting (first, last){
//   alert('Welcome ' + first + ' ' + last);
// }
// greeting('Joe', 'Jones');
//
// function calculate (num1, num2){
//   alert(num1 + num2);
// }
// calculate(5, 6);
//
// function color(color1, color2, color3){
//     console.log(color1 + ' ' + color2 + ' ' + color3);
// }
// color('red', 'yellow','blue');
//
// var greetings = function(first, last){
//   alert('Bienvenue '+ first +' ' + last);
//
// }('Amy', 'Gabbert');
//
// var numbers = function(a, b){
//   alert(a*b);
// }(3, 8);
//
// var colors = function(color4, color5, color6){
//     console.log(color4 + ' ' + color5 + ' ' + color6);
// }('green', 'purple', 'orange');
/*
*
*Function from a Function
*
*/
// function hello(firstName){
//   var msg = 'Hello, ' + firstName;
//   console.log(msg);
//   popup(msg);
// }
// function popup(x){
//   alert(x);
// }
// hello('matt');

//Challenge
function hello(firstName){
  msg = 'Hello, ' + firstName;
  console.log(msg);
}
hello('matt');

function hello2(last){
   pop = msg + ' ' + last;
   console.log(pop);
}
hello2('smith');

function hello3(x){
  alert(x);
}hello3(pop);
