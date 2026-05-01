
var num1 = -50;
var num2 = 40;
console.log("sum",num1+num2);           //sum of num1 and num2

console.log("====================================");


var newValue = Math.abs(num1);                //Math.abs mane  math funtion er moddhe build in function holo Absolute value jake abs diye represent kora hoyeche . Absolute value mane -ve num ke +ve number a convert kora
console.log("Absolute value of num1",newValue);
console.log("sum",num1+num2); 


console.log("===================================");


var num3= 6.5;
var num4= 4.499999;

console.log("num3 =6.5 it's round figer ",Math.round(num3));  // num ke round kore dibe 5.68=6 hobe 5.2=5 dibe value
console.log("num4 =4.499999 it's round figer ",Math.round(num4));


console.log("");


console.log("num3 =6.5 it's ceiling value ",Math.ceil(num3));     // num ke ceiling value te represent korbe 
console.log("num4 =4.499999 it's  ceiling value",Math.ceil(num4));


console.log("");


console.log("num3 =6.5 it's floor value ",Math.floor(num3));     // num ke floor value te represent korbe 
console.log("num4 =4.499999 it's floor value",Math.floor(num4));


console.log("===============================");

var num5= Math.random();
console.log("Give the random value",num5);       //random value provide korbe (0.00 to 1.00)

console.log("===============================");

var num6= Math.random()*5;
console.log("Give the random value",num6);       //random value provide korbe (0.00 to 5.00)
