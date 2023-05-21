const ar =[23,43,12,53,56,75,7,54,53,24,56,72,45,75];
let mx = 0;
for (let i=0;i<ar.length;i++)
{
    if(mx<ar[i]){
        let temp =ar[i]
        mx=temp;
    }
}
console.log(mx);
