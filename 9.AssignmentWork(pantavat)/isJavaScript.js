// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String)
//  যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)।যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে
//   আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

function isJavaScriptFile(String){
    const Extension= String.endsWith('.js')
    if(Extension){
        console.log("True");
    } 
    else console.log("false");
}
const Str= 'index.jsx';
const isJs = isJavaScriptFile(Str);