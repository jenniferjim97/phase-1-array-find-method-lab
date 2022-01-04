// code your solution here
function superbowlWin(record){
let winYear =  record.find(element => element.result === "W")
return winYear? winYear.year: undefined;
 }