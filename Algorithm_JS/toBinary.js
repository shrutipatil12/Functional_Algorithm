var Util =require('../Utility/Algorithm_Util');

var read = require('readline-sync');
var num= read .questionInt("enter The number to convert into binary:");

var binary_res=Util.toBinary(num);
module.exports=binary_res;