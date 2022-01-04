// code your solution here
function superbowlWin(record){
let winYear =  record.find(element => element.result === "W")
return winYear? winYear.year: undefined;
 }


 function superbowlWin(array) {
     for (let game of array){
         if(game.result === "W"){
             return game.year;
         }
     }
 }
 console.log(superbowlWin(record));