let  sum = 0;
for (let i = 5; i > 0; i--) {
    sum +=i;     
}
// console.log(sum);

function recursion(i) {
    if(i==1){
     return 1 ;
    }
  const sum=i + recursion(i-1)
return sum;

}

const sumOfFive =recursion(5);
console.log(sumOfFive);
