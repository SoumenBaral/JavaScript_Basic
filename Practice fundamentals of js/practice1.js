var a = 12.4353312;
var b = 15;
var takeInPoint3 = parseFloat(a.toFixed(3));
var convart_INT = parseInt(a);
var convart_Float = parseFloat(b);
// console.log(takeInPoint3);
// console.log(convart_INT);
// console.log(convart_Float);
 var array = [13 ,34,45,44,55,90];
 var length = array.length;
 var position = array.indexOf(44);
 console.log(length);
 console.log(position);
 array.unshift(10);
 array.splice(2,0,50);
 console.log(array);
 const africanCountries = ["Ghana", "Nigeria", "Rwanda"];
const europeanCountries = ["Germany", "France", "spain"];
let countrie = [].concat(africanCountries,europeanCountries);

// let countries = [].concat(africanCountries, europeanCountries);

console.log(countrie); // ["Ghana","Nigeria","Rwanda","Germany","France","spain"]