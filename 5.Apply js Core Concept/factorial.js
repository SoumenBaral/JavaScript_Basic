const fact = 5;
let Factorial = 1;
for(let i=1; i<=fact;i++){
    Factorial *=i;
}
console.log(Factorial);
//UltaLoop

for(let i=fact ; i>0;i--)
{
    // console.log(i);
    Factorial *=i;

}
console.log(Factorial);