//তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে
//  এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
function isBestFriend(person1,person2)
{
    if (person1.name==person2.friend&&person2.name==person1.friend) {
        return true;
    }
    else
    {
        return false;
    }

}
const person1 = {name:"soumen",friend:"shuvox"}
const person2 = {name: "shuvo",friend:"soumen"}
const friend = isBestFriend(person1,person2)
console.log(friend);