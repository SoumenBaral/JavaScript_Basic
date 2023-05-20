function isLeapYear(year)
{
    if(year%4==0 && year%100==0&&year %400==0){
        return true;
    }
    else
    {
        return false;
    }
}

const dateOfBirth = 1997;
console.log("I am from Leap Year -----",isLeapYear(dateOfBirth));