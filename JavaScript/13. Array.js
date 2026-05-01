//basic array

var fname=["Mim", "Jim","Akbar","Naju"];

console.log(fname[0]);

fname[0]=20;
console.log(fname);

//push()  mane new value/element array te add kora last a (ki add korbo bole dite hobe)

fname.push(2026)
fname.push("BRACU")

console.log(fname);

//pop()  mane value/element ke array theke remove kora last theke(bole dewa lagbe na)

fname.pop();
console.log(fname);

//shift()  mane value/element ke array theke remove korbe first theke (bole dewa lagbe na)

fname.shift();
console.log(fname);

//unshift()    mane value/element ke array te add korbe first theke(ki add korbo bole dite hobe)

fname.unshift("Salma");
console.log(fname);

//slice  mane value/element ke array theke remove korbe show korabo (bole dewa lagbe range)
 
console.log(fname.slice(1,4));


//splice  1 to 4 index er element ke repleace kore "1234" bosbe
var fname=["Mim", "Jim","Akbar","Naju"];
fname.splice(1,4,"1234");
console.log(fname); 