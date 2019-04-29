
var read = require('readline-sync');
module.exports ={


        //String Replace
        replaceStr() {
            var str1="hello userName how are you";
             console.log("before replace = ",str1);
            var read = require('readline-sync');
            var replace_str = read.question("enter any string to replace:");
            var count = replace_str.length;
            if (count > 3) {
                var str2 = str1.replace("userName", replace_str);
                console.log(str2);
            }
            else {
                console.log("Invalid, Enter the name having more than three characters");
            }
            return replace_str;
        },


        // FindDistance
        findDistance() {

            read = require('readline-sync');
            var x =read.question("Enter the  x value");
            var y = read.question("Enter the y value");
            var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(2, y));

            console.log("Euclidean Distance for ", +x, "and ", + y, "is", +distance);
            return x;
        },

        //Gambler


        gambler() {
            var read=require('readline-sync');
            var stake = read.question("Enter stake");
            var goal = read.question("Enter goals");
            var trials = read.question("Enter trials");
            var bets = 0;
            var wins = 0;
            for (var counter = 0; counter < trials; counter++) {

                var cash = stake;
                while (cash > 0 && cash < goal) {
                    bets++;
                    //   console.log(bets);

                    if (Math.floor(Math.random() < 0.5)) {
                        cash++;
                    }
                    else {
                        cash--;
                    }
                }
                if (cash == goal)
                    wins++;
            }

            var winPercent = (100.0 * (wins / trials));
            console.log(wins + " wins of ", + trials, + "  trials");
            console.log("avg bets             = ", + 1.0 * (bets / trials));
            console.log("Percent of games won = ", + 100.0 * (wins / trials));
            console.log("percentage of loss   = ", + (100 - winPercent));
            return stake;

        },

        //HarmonicNumber
        harmonicNum() {
            read=require('readline-sync')

            var number=read.question("Enter the value");

            var harmonic = 1;
            for (var i = 1; i < number; i++) {
                console.log("Series", +harmonic);

                harmonic = harmonic + (1 / i);

            }
            return number;
        },

        //LeapYear
            
             leap() 
             {
           
                // if(year>999&& year<9999)
                // {
                    read=require('readline-sync');
                    var year=parseInt(read.question("Enter the year")); 
                   
                if (year % 100 == 0 ? year % 400 == 0 : year % 4 == 0)
                {
                    console.log(" Entered year is leap year", +year);
                }
                 else
                {
                    console.log("Entered year is not leap year", +year);
                
                }
                return year;
            },



        //Quadratic Equation

        quadratic() 
        {
            read=require('readline-sync');
            var a=read.question("Enter the value for a  ");
            var b=read.question("Enter the value for b  ");
            var c=read.question("Enter the value for c ");

            var delta = b * b - 4 * a * c;
            console.log("delta", +delta);
            if (delta > 0) {
                var root1 = (-b + Math.sqrt(delta)) / (2 * a);
                var root2 = (-b - Math.sqrt(delta)) / (2 * a);
                console.log("res1=", +root1);
                console.log("res2=", +root2);
            }
            if (delta == 0) {
                root1 = root2 = -b / (2 * a);
                console.log("res1=res2", +root1);
            }

            else {
                var realpart = -b / (2 * a);
                var imaginarypart = Math.sqrt(-delta) / (2 * a);
                console.log("real part ", +realpart);
                console.log("imaginary part ", +imaginarypart);
            }
            return a;
        },

          //2DArray
        array(row, column) {
          
        var read = require('readline-sync');

        var row = read.question('enter the size of row =');
        var column = read.question('enter the size of column =');
            var arr = [];
            for (var i = 0; i < row; i++) {
               arr[i] = [];
      
               for (var j = 0; j < column; j++) {
      
                  var arr_element = parseInt(read.question("Enter the value ="));
                  arr[i][j]= arr_element+" ";
      
               }
      
            }
            console.log(arr);
            return row;
         },

    }

