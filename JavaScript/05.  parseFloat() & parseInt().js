                                      //String to Nmumber Conversion//


var num1=100;
var num2=50;
var total=num1+num2;
console.log("Sum of n1 and n2 is",total)
console.log("--------------")



var num3="100.237";
var num4=50;
var totalnum=num3+num4;
console.log("Add of n3 and n4",totalnum) 
console.log("     ")                     //eikhane string dhore nicche tai 100.237 er por 50 add korche pashapashi but sum korche na

console.log(num3)
console.log(typeof num3)         
console.log("         ")              // shown the type of n3 is string 


num3=parseFloat(num3);                //num3 string so,eitake float number a convert korbo 
console.log(num3)
console.log("              ")

console.log(typeof num3)
var totalnum=num3+num4;
console.log("Sum of the n3 and n4 is",totalnum) 
console.log("----------------------")


var num5="200.237";
var num6=70;
var sum=num5+num6;
console.log("Add of n7 and n8",sum) ;       //eikhane string dhore nicche tai 200.237 er por 70 add korche pashapashi but sum korche na
console.log("            ");


console.log(num5);
console.log(typeof num5);                     // shown the type of n3 is string 
console.log("           ")           


num5=parseInt(num5);                           //num5 string so,eitake integer number a convert korbo      
console.log(num5);
console.log(typeof num5);
console.log("         ")


var sum=num5+num6;
console.log("Sum of n5 and n6 is",sum) ;
console.log("--------------")



                                          //Number to String Conversion//


var num7=100;
var num8=70;


console.log(num7);
console.log(typeof num7);
console.log(num8);
console.log(typeof num8);               //shown that num7 and num8 are number type

var sum_of_the_numbers=num7+num6;
console.log("Sum of n7 and n8 is", num7+num8) ;                 //eikhane duitai number tai num7 and num8 sum hoyeche 
console.log("-------------------");


num7=""+num7 ;                         //convert number to string
console.log(num7);
console.log(typeof num7);
console.log("Add of n7 and n8", num7+num8) ;  

console.log("-------------------");


