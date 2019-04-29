
read=require('readline-sync');
var start_time = 0;
var stop_time = 0;
var elapsed;


var start_time=read.question("Press '1' to Start Time: ");

var stop_time=read.question("Press '2' to Stop Time: ");

function start()
 {
        start_time = new Date().getTime();
        console.log("Start Time is: " + start_time);
        
 }
function stop()
{
   
	 stop_time = new Date().getTime();
        console.log("Stop Time is: " + stop_time);
        
}
function getElapsedTime()
{
	elapsed =stop_time - start_time;
	console.log("Elapsed Time",+elapsed);
}
   

start();
stop();
getElapsedTime();