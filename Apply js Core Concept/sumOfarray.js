function sumOfArray (ar)
{
    let sum =0;o
    for(const element of ar){
        sum +=element;
    }
    return sum;
}
function getOddNumber(numbers){
const Odd = [];
for(const element of numbers){

    if(element%2!=0){
        Odd.push(element);
    }

}
return Odd;

}
const array = [22,42,88,77,95,69,33,53];
const size = 6;

// console.log("sum of this array is : ",sumOfArray(array));
const Odd_array =getOddNumber(array);
console.log(Odd_array);