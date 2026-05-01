var myinfo = {name:"Mim",address:"Dhaka",age:25};
console.log(myinfo);

console.log(myinfo.name);
console.log(myinfo.address);
console.log(myinfo.age);

console.log("---------");

var newinfo =myinfo["name"];
console.log(newinfo);

console.log("---- object Create-----");

function MyInfo (Yourname,Address,Age){
    this.Yourname= Yourname;
    this.Address= Address;
    this.Age= Age;
}

var obj1= new MyInfo("Mim","Dhaka",25);
var obj2= new MyInfo("Jim","Dhaka",20);
console.log(obj1);
console.log("-- -- -- --");

console.log(obj2);


 console.log("---- object Create and print with a function-----");

 
function MyInfo (Yourname,Address,Age){
    this.Yourname= Yourname;
    this.Address= Address;
    this.Age= Age;
    this.ShowMe= function(){
        console.log(this.Yourname);
        console.log(this.Address);
        console.log(this.Age);    
    }
}

var obj3= new MyInfo("Mim","Dhaka",25);
var obj4= new MyInfo("Jim","Dhaka",20);

obj3.ShowMe();
console.log(" ")
obj4.ShowMe();
