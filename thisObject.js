// membuat object
// cara 1 - function declaration
function halo() {
    console.log("halo");
}
this.halo(); // this mengambalikkan object global
console.log("-------------------------------------------------------");

// // cara 2 - object literal
var obj = {no : 10, nama : 'harits'};
obj.halo = function(){
    console.log(this);
    console.log("halo");
}
obj.halo(); //this mengembalikkan object yang bersangkutan
console.log("------------------------------------------------------");


// // cara 3 - constructor
function Halo(){
    console.log(this);
    console.log("halo");
}
var obj1 = new Halo();
var obj2 = new Halo(); //this mengembalikkan object yang baru dibuat








// this
// console.log(this);