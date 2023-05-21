function average(ar)
{
    let sum =0;
    for (let i = 0; i < ar.length; i++) {
        const element = ar[i];
        sum+=element;
       
    }
    let avar = sum/ar.length;
    return avar;
}

const ar =[23,43,12,53,56,75,7,54,53,24,56,72,45,75];
console.log("The average of this array is ----",parseInt(average(ar)));
