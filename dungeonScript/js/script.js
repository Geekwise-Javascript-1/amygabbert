// var hero = {name: prompt("What is your name, hero?: ")};
var hero = {};
hero.name = prompt('What is your name?: ');
var monsters = [];
var monsterType = ["vampire", "werewolf", "zombie", "spider", "witch", "snake", "Purple People Eater", "ghost", "demon", "clown"];

/*
*
*Direction Functions
*
*/
//North
function moveNorth(n){

  console.log('Moving ' + n);
}
moveNorth('North');
//East
function moveEast(e){
  console.log('Moving ' + e);
}
moveEast('East');
//South
function moveSouth(s){
  console.log('Moving ' + s);

}
moveSouth('South');
//West
function moveWest(w){
  console.log('Moving ' + w);
}
moveWest('West');

/*
*
* Grid function
*
*/
var grid = function(y, x){
    console.log(x);
    console.log(y);

    var totalCells = y * x;
    var cells = [];
    var visited = [];

    for (var i = 0; i < y; i++){
      cells[i] = [];
      visited[i] = [];

      for(var j = 0; j < x; j++){
        cells[i][j] = [0, 0, 0, 0];
        visited[i][j] = false;
      }
    }

    var currentCell = [ Math.floor(Math.random() * y), Math.floor(Math.random() * x) ];
    console.log('The starting cell: ' + currentCell + '\n\r-------------\n\r');

    var path = [currentCell];
    console.log('path: ' + path);

    visited[ currentCell[0] ] [currentCell[1] ] = true;

    var numOfVisited = 1;

    while( numOfVisited < totalCells){
      var possible = [
        [ currentCell[0]-1, currentCell[1], 0, 2 ],
        [ currentCell[0], currentCell[1]+1, 1 , 3 ],
        [ currentCell[0]+1, currentCell[1], 2, 0],
        [ currentCell[0], currentCell[1]-1, 3, 1]
     ];

     var neighbors = [];
     console.log('//Check all four directions.');
     console.log(possible);
     console.log('\n\r// Of the four sides, does a cell exist in each direction?');

     for (var k = 0; k<4; k++){
       if( possible[k][0] > -1 &&
           possible[k][0] < y &&
           possible[k][1] > -1 &&
           possible[k][1] < y)
           !visited[possible[k][0]] [ possible[k] [1] ]
           {neighbors.push( possible[k]);
           }
     }
     console.log(neighbors);
  
    }

}(4,4);
