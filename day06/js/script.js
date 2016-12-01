//var fruits = ['banana', 'grapefruit', 'lemon', 'mandarin', 'tangelo'];

// fruits.push('kiwi');
//
//console.log(fruits);
// var str = fruits.join(", ");
// console.log(str);
//
// fruits.pop();
// console.log(fruits);
//
// fruits.unshift('mango');
// console.log(fruits);
//
// fruits.shift();
// console.log(fruits);
// console.log(fruits.reverse());
// console.log(fruits.sort());

// var num = [8, 90, 3, 27];
//
// console.log(num.sort());
//
// var a = ['a', 2, 1, 'A'];
// console.log(a.sort());

//fruits.splice(x, y, str); // x=> begin index, y=> how many, str => what to add
// fruits.splice(2, 0, 'pomegranate' );
// console.log(fruits);
// fruits.splice(4,2, 'apple');
// console.log(fruits);

// var myfruits = fruits.slice(0, 3);
// console.log(myfruits);

//console.log(fruits.slice(1,2) );
//console.log(fruits);

// var userResp = prompt('do you like cats? (yes or no): ');
//
// if (userResp == 'yes'){
//   //run this code
//   alert('Cats fur you');
// }else{
//   userResp = prompt('Dogs, hamsters or guinea pigs?'{
//     if userResp == 'Dogs'
//   }
// }

// var randNum = Math.floor(Math.random()*11);
//
// var guess = parseInt( prompt('Choose a number between 0-10: ') );
//
// if (guess == randNum) {
//   alert('You got it!!');
// } else if (guess > randNum) {
//     alert('Too high, like the sky!');
//   }else if (guess < randNum) {
//     alert('Too low, like a worm.');
//   }
//
//   console.log(randNum);

/*
*Class Challenge
*/
  //is user male
  //is user female
  //does user like ice cream

  var gender = prompt('Are you male or female?');
  var iceCream = prompt( 'Do you like ice cream? (yes/no)');

//male+yes
  if (gender == 'male' && iceCream == 'yes'){
    alert('I scream, you scream we all scream for ice cream!!');
  }
//male+no
  else if (gender == 'male' && iceCream == 'no'){
    alert ('I scream for ice cream, but you don\'t, brother!')
  }
//female+yes
  else if (gender == 'female' && iceCream == 'yes'){
    alert('I like ice cream, you like ice cream, let\'s scream for some!!');
  }
//female+no
  else if (gender == 'female' && iceCream == 'no'){
      alert('Why is everyone screaming? It\'s only ice cream!');
  }
