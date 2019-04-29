read=require('readline-sync');
var Util =require('../Utility/Algorithm_Util');

var pay_res=Util.monthlyPayment();
module.exports=pay_res;