const num=19;
const booli=true;
const st ="Ami to vala na vala loia thaikoo .tui choker aral haow kase ki bah dure roaw mone rakho tomari chilam aaaaaaa am ai mon tomak dilam ";
const case_unsensitive = st.toLowerCase().startsWith("ami"); 
// const slice =  st.split(" ")
// console.log(case_unsensitive);

const words = st.split(' ');
// console.log(words[3]);
let i=7;
while(i<=19)
{
    if(i%2==1)
    {
        // console.log(i);
    }
    i++;
}
const  array = [12,43,53,53,64,74,23,13,56,57,86,97];
const length = array.length;
console.log(length);
array[3]= 88;
// console.log(array);
array.push(104,301);
// console.log(array);
array.pop();
// console.log(array);
// -------------------------------------------------------------//

// তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা 
//থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো ??
const greaterThen80 = [];
for(const number of array )
{
    if (number>=80) {
        greaterThen80.push(number);
    }
}
// console.log(greaterThen80);

//---------------------------------
//একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

const tableMat= {
    brash : 2,
    charger: 4,
    btl : 7 
}
tableMat.brash = 5;
console.log(tableMat);