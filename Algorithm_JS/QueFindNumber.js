


var Util=require('../Utility/Algorithm_Util');
var read=require('readline-sync');

        //console.log(");
        var guess_num =read.question("guess a no between 0 to 127 ");
        var powerOftwo = Math.pow(2, guess_num);
        console.log(powerOftwo);
        console.log("guessed no is " + find(powerOftwo));
    

function find( powerOftwo) {

    var low = 0, high = powerOftwo-1 , mid;
    while (low != high) {
        mid =Math.floor((low + high) / 2);
       //console.log(");
       var  answer = read.question(" \nEnter  1 if no is between " + low + " - " + mid + 
       "\n Enter 2 if no is between "  + (mid + 1) + " - " + high);
        mid = Math.floor((low + high) / 2);
        if (answer == 1)
            high = mid;
        else
            low = mid + 1;
    }
    return low;
}
