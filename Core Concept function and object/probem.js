function foo (){
    console.log("Foo");
    bar();
}
function bar(){
    console.log("bar");
}
// foo();
function avarage(a, b,c) {
    var avarage = (a+b+c)/3;
    console.log(avarage);
}
// avarage(10,30,50);

var array =[12,30,50,8];
var n= 4;
function get_avarage(ar,x){
    var sum=0;
    for(var i=0;i<x;i++)
    {
        sum+= ar[i]
    }
    var avarage = sum/x;
    console.log(avarage);
}
// get_avarage(array,n);
function Odd_Even(a){
if (a%2==0) {
    console.log("Even Number");
}
else{
    console.log("Odd numbers");
}
}
// Odd_Even(10);
var signels =['Green','red','Yellow'];
for (var signel of signels) {
  if (signel=='Green') {
    console.log("green coloured traffic signal, you should cross the road.");
  }
  if (signel=='red') {
        console.log("you may be indanger.");
    }
    if (signel=='Yellow') {
        console.log("You Have to stoop");
    }
}