var read=require('readline-sync');

module.exports=
{
//Anagram
Anagram()
 {
    var read=require('readline-sync');
    var str1= read.question("Enter The First String:");
    var str2= read.question("Enter The second String:");
    var format = /[a-zA-Z]/;
  
    var len_str1=str1.length;
    var len_str2=str2.length;
    var count = 0;
    
    if (format.test(str1) && format.test(str2)) {
      if (len_str1!== len_str2) {

        console.log("strings are not anagram");
      }

      else {
        for (var i = 0; i < len_str1; i++) {

          for (var j = 0; j <len_str2; j++) {

            if (str2[j].toLowerCase() == str1[i].toLowerCase()) {
              count++;
              break;
            }
          }
        }

        if (count == len_str1) {

          console.log("string are anagram");
        }
        else {
          console.log("string are not anagram");
        }
      }
    }
    else {
      console.log("enter only letters or alphabets");
     }
    return len_str1;
  },

  //Prime number

  isAnagramPalindrome() {
    try {
      console.log("anagram and palindrome Prime number in the range 0-1000  ");
      var arr = [];
      for (let i = 0; i < 1000; i++) {
        if (this.checkPrime(i)) {
          arr.push(i);
        }
      }
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (this.isAnagram(arr[i], arr[j])) {
            console.log(arr[i] + " and " + arr[j] + " are anagram");
            if (this.checkNumberPalindrome(arr[i])) {
              console.log(arr[i] + " is palindrome");
            }
            if (this.checkNumberPalindrome(arr[j])) {
              console.log(arr[j] + " is Palindrome");
            }
          }
        }
      }
    }
    catch (e) {

      console.log(e.message);

    }
  },


  checkAnagram(string1, string2) {
    var format = /[a-zA-Z]/;
    var result;
    var count = 0;
    if (format.test(string1) && format.test(string2)) {
      if (string1.length !== string2.length) {

        console.log("strings are not anagram");
      }

      else {
        for (var i = 0; i < string1.length; i++) {

          for (var j = 0; j < string2.length; j++) {

            if (string2[j].toLowerCase() == string1[i].toLowerCase()) {
              count++;
              break;
            }
          }
        }

        if (count == string1.length) {

          console.log("string are anagram");
        }
        else {
          console.log("string are not anagram");
        }
      }
    }
    else {
      console.log("enter only letters or alphabets");
    }
  },
 

  getPrimeNumber(number) {
    if (number <= 1000) {
      for (var i = 1; i <= number; i++) {
        var temp = 0;
        for (var j = 2; j < i - 1; j++) {
          if (i % j == 0) {
            temp = temp + 1;
          }
        }
        if (temp == 0) {
          console.log("Prime Number:" + i);
        }
      }
      return number;
    }
    else {
      console.log("Number is out of range")
    }
  },
  checkPrime(num) {
    try {
      if (num == 0 || num == 1)
        return false;
      for (let i = 2; i < num; i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
    catch (e) {
      console.log(e.message);
    }
  },

  findPrimeNumber() {
    try {
      console.log("Prime number must be in the range of 0-1000");
      for (let i = 0; i <= 1000; i++) {
        if (this.checkPrime(i))
          console.log(i);
      }
    }
    catch (e) {
      console.log(e.message);
    }
  },
  checkNumberPalindrome(n1) {
    try {
      var string = "";
      n1 = n1 + "";

      for (let i = 0; i < n1.length; i++) {
        string = n1.charAt(i) + string;
      }
      if (string == n1) {
        return true;
      }
      return false;
    }
    catch (e) {
      console.log(e.message);
    }
  },


  isAnagram(s1, s2) {
    try {
      var format = /[a-zA-Z0-9]/;
      var result;
      if (format.test(s1) && format.test(s2)) {
        if (s1.length !== s2.length) {
          result = false;
        }
        var sorts1 = s1.toString().split("  ").sort().join("");
        var sorts2 = s2.toString().split("").sort().join("");
        result = sorts1 === sorts2;
        if (result == true) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        console.log("enter only letters or alphabets");
      }
    }
    catch (e) {
      console.log(e.message);
    }
  },


  AnagramPalindrome() {

      var num=read.question("Enter the range to find prime number");
     // console.log("Prime number in the range 0-1000 which are anagram and palindrome ");
      var arr = [];
      for (let i = 0; i < num; i++) {
        if (this.checkPrime(i)) {
          arr.push(i);
        }
      }
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (this.isAnagram(arr[i], arr[j])) {
            console.log(arr[i] + " and " + arr[j] + " are anagram");
            if (this.checkNumberPalindrome(arr[i])) {
              console.log(arr[i] + " is palindrome");
            }
            if (this.checkNumberPalindrome(arr[j])) {
              console.log(arr[j] + " is Palindrome");
            }
          }
        }
      }
      return num;
    
    
    
  },


  //InsertionSort String

  insertionString() {
    var size =read.question("enter the size of array");
    var array = [];
    for(var i =0 ;i<size;i++)
    {
     array[i]=read.question("enter the string to sort = ");
    }
    for (var i = 1; i < array.length; ++i) {
      var value = array[i];

      for (var j = i - 1; j >= 0; --j) {
        if (array[j] <= value) 
        break;
        array[j + 1] = array[j];
      }

      array[j + 1] = value;
    }
    console.log(array)


    return size;
  },

  //MergeSort

  mergeDivideSort(res) {
    var n = res.length;
    
    if (n < 2) {
      return;
    }
    var mid = Math.floor(n / 2);
    var left = [mid];
    var right = [n - mid];
  
    for (let i = 0; i < mid; i++) {
      left[i] = res[i];
    }
    for (let j = mid; j < n; j++) {
      right[j - mid] = res[j];
    }
 
    this.mergeDivideSort(left);
   
    this.mergeDivideSort(right);
    this.merge(left, right, res);

  },

  merge(left_arr, rig_arr, res_arr) {
    var i = 0; var j = 0;
    var k = 0;
    while (i < left_arr.length && j < rig_arr.length) {
      if (left_arr[i] <= rig_arr[j]) {
        res_arr[k] = left_arr[i]
        i++;
      }
      else {
        res_arr[k] = rig_arr[j];
        j++;
      }
      k++;
    }
   
    while (i < left_arr.length) {
      res_arr[k] = left_arr[i];
      i++;
      k++;
    }
  
    while (j < rig_arr.length) {
      res_arr[k] = rig_arr[j];
      j++;
      k++;
    }
    return res_arr;
  },

  //DayOfWeek

  dayOfWeek() {
        var read = require('readline-sync');
        var m=read.question("Enter the month : ")
        var d=read.question("Enter the date  : ")
        var y= read.question("Enter the year : ")
        
      var y0 = y - (14 - m) / 12;
      var x = y0 +(y0 / 4 - y0 / 100 + y0 / 400);
      var m0 = m + 12 * ((14 - m) / 12) - 2;
      var d0 = (d + x + (31 * m0) / 12) % 7;
      
      var dayOfWeek_res=d0;
      console.log(dayOfWeek_res);
      var dayOfWeek_res=Math.floor(dayOfWeek_res,0);
      if (dayOfWeek_res==0)
      {
          console.log("Sunday");
      }
      else if (dayOfWeek_res==1)
      {
          console.log("Monday");
      }
      else if (dayOfWeek_res==2)
      {
          console.log("Tuesday");
      }else if (dayOfWeek_res==3)
      {
          console.log("Wednesday");
      }else if (dayOfWeek_res==4)
      {
          console.log("Thursday");
      }else if (dayOfWeek_res==5)
      {
          console.log("Friday");
      }else if (dayOfWeek_res==6)
      {
          console.log("Saturday");
      }
       return d;
   },
  

//MonthlyPayment


monthlyPayment() {
  var year=read.question("Enter the number of year ");
  var Rate=read.question("Enter the Rate           ");
  var Principle=read.question("Enter the Principle ");

  var n = 12 * year;
  var r = Rate / (12 * 100);
  var d = 1 - (1 + r) **(-n);
  var mp = (Principle * r) / d;
  console.log(" monthly Payment is = " + mp);
return Rate;
},

// toBinary

toBinary(num) 
{
  //var tem = num
  var string = " ";
  while (num > .9)
   {

    var reminder = Math.floor(num % 2)
    string = reminder + string
    num = num / 2

  }

  console.log("binary value for entered number is:" + string)
  return string;
},

}