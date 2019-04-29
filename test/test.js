

//************************************Functional programs testcases****************************** */
//************************** Leap Year******************
/*
const assert=require('chai').assert;
const num=require('../Functional_JS/LeapYear');//result


describe('leap year testcase',function(){
    

    it('year should be four digit',function(){
        let count_year= num;
        assert.isTrue(count_year > 999 && count_year < 9999);
  });
});
*/

 //****************StringReplace**************
 /*
const assert=require('chai').assert;
const str=require('../Functional_JS/ReplaceString');
describe('Basic Mocha character Test', function (){

it('string should have 3 char',function(){
let result2=str
let count=result2.length;
assert.isTrue(count>=3)
});
});
*/
// ******************Harmonic***************** *
/*
const assert=require('chai').assert;
const result=require('../Functional_JS/HarmonicNumber');
describe('Basic Mocha Harmonic Testcase', function (){

it('Harmonic Series not possible',function(){
let result2=result
assert.isTrue(result2>0)
});
});
*/

// ******************Gambler *****************

/*
const assert=require('chai').assert;
const result=require('../Functional_JS/Gambler');
describe('Basic Mocha gambler Testcase', function (){

it('Player can not play stake should be greater than zero',function(){
let result2=result
assert.notEqual(result2,0);
});
});
*/

// ******************* 2D Array*********************
/*
const assert=require('chai').assert;
const result=require('../Functional_JS/TwoDArray');
describe('Basic Mocha 2D array testcase', function (){

it('Array size should be greater than zero',function(){
let result2=result
assert.isTrue(result2>=0);
});
});
*/

// *********************Euclidean Distance****** *
/*
const assert=require('chai').assert;
const result=require('../Functional_JS/FindDistance');
describe('Basic Mocha Euclidean Distance Testcase', function (){

it('Euclidean distance not defined if x and y are zero',function(){
let result2=result
assert.notEqual(result2,0);
});
});
*/

// ********************Quadratic ****************
/*
const assert=require('chai').assert;
const result=require('../Functional_JS/Quadratic');
describe('Basic Mocha Quadratic Testcase', function (){

it('value should be not be zero',function(){
let result2=result
assert.isTrue(result2>0);
});
});
/ /* ********************************Quadratic roots*******************************/
/*const assert=require('chai').assert;
const result=require('../functional/quadratic')
describe('Basic mocha test for Quadratic roots', function (){
it('Roots are imaginary if delta(b*b-4*a*c) less than 0',function(){
let result2=result
console.log(result2)
assert.isTrue(result2>0);
});
}); 
*/


// ******************* StopWatch*****************
/*
const assert=require('chai').assert;
const result=require('../Functional_JS/Quadratic');
describe('Basic Mocha stopWatch Test', function (){

it(' stopwatch',function(){
let result2=result
assert.equal(result2,[a-z]);
});
});
*/


//*************************************Algorithm Programs testcases********************************** */

/****************Anagram *********** */
/*
const assert=require('chai').assert;
const result=require('../Algorithm_JS/Anagram');
describe('Basic Mocha character Testcase', function (){

it('Entered string length should be more than one ',function(){
let result2=result
assert.isTrue(result2>1);
});
});
*/

//******************DayOfWeek*********** */
/*
const assert=require('chai').assert;
const result=require('../Algorithm_JS/dayOfWeek');
describe('Basic Mocha Day od week Testcase', function (){

it('date should be geater than 0 and less than 32 ',function(){
let result2=result
assert.isTrue(result2>0 && result2<32);
});
});
*/
//*************Merge Sort*************** */
/*
const assert=require('chai').assert;
const result=require('../Algorithm_JS/Merge');
describe('Basic Mocha merge test Testcase', function (){

it('Array size should be greater than one ',function(){
let result2=result;
assert.isFalse(result2>1);
});
});
*/

//***************************InsertionSort**************************/
/*const assert=require('chai').assert;
const result=require('../Algorithm_JS/Insertion')
describe('Basic mocha test for Insertion sort ', function (){
it('size should be in valid range',function(){
let result2=result
assert.isFalse(result2<=0);
});
}); 
*/
//****************************MergeSort************************************ */
/*const assert=require('chai').assert;
const result=require('../Algorithm_JS/Merge')
describe('Basic mocha test for merge sort', function (){
it('array size should be greater than zero',function(){
let result2=result
assert.isFalse(result2<=0);
});
}); */

//**************************** Monthly Payment****************************/
/*const assert=require('chai').assert;
const result=require('../Algorithm_JS/monthlyPay')
describe('Basic mocha test for Monthly Payment', function (){
it('Rate value should not be zero',function(){
let result2=result
assert.isTrue(result2>0);
});
}); 
*/

//**************************Prime And Pal****************/
/*
const assert=require('chai').assert;
const result=require('../Algorithm_JS/PrimePalinAnagram')
describe('Basic mocha test for prime number', function (){
it('Input range should be greater than 2',function(){
let result2=result
console.log(result2)
assert.isTrue(result2>2);
});
});
*/

//**************************ToBinary********************* */
/*const assert=require('chai').assert;
const n=require('../Algorithm_JS/toBinary');
describe('Basic mocha test for decimal to binary conversion', function (){
it('Number should be decimal',function(){
let result2=n
assert.isFalse(result2<=0);
});
});
*/
