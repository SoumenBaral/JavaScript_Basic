// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।
// প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। 
// এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFareযেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । 
// মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 


function publicBusFare(public)
{
    return public*250;
}
const totalPrice = publicBusFare(100);
// console.log(totalPrice);

//  যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি ।
//  বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

function restRent(public)
{
    if(public>=50)
    {
        const bus = parseInt(public/50);
        const restForCar = public%50;
        const car = parseInt(restForCar/11);
        
        if (restForCar<=11&&restForCar>0) {
            let restAfterBus = public-(bus*50);
            const totalBusRentWithoutCar = restAfterBus*250;
            return totalBusRentWithoutCar;
            
        }
        else if(restForCar>=11)
        {
            const restAfterCarAndBus= public-((bus*50)+(car*11));
            if (restAfterCarAndBus>0) {
                const totalBusRent = restAfterCarAndBus*250;
                return totalBusRent;
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    
        
       
        
    }
    else
    {
        return 0;
    }
}
const totalBusRent = restRent(365);
console.log(totalBusRent);