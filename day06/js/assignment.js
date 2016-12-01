
function list() {
  var items = [];

  items.push(prompt('What is your first to-do item?: '));
  var newItem = prompt(('Would you like to add another item? y/n'));

   while (newItem == 'y') {
      items.push(prompt('Enter another item:'));
      console.log(items);
      newItem = prompt('Would you like to add to your list? y/n');
    }
  if (newItem == 'n') {
   alert('Here is your list: ' + items.join(', '));
 }else{
   alert('Please enter a valid answer of y for yes or n for no.');
     }
       }
list();
