// You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal

var num1 = 13;
var num2 = 79;
var num3 = 79;
if (num1>=num2 && num1>=num3) {
    console.log(num1);
}
else if (num2>num1 && num2>=num3) {
    console.log(num2);
}
else
{
    console.log(num3);
}

if (num1==num2||num1==num3) {
    console.log('Isosceles');
}
else if (num2==num3) {
    console.log('Isosceles');
}
else{
    console.log('Not Isosecles Its Just a triange');
}