const ar =[23,43,12,53,56,75,7,54,53,24,56,72,45,75];
let tmp=ar[0]
for (let i = 0; i < ar.length;++i) {
   for(let j=i+1;j<ar.length;++j)
   {
    if (ar[i]<ar[j]) {
        tmp = ar[i]
        ar[i]=ar[j];
        ar[j]=tmp;
    }
   }
}
console.log(ar);
//if all the number is different......
console.log("The 2nd largest value of this array is---",ar[1]);