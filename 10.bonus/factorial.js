function fact(i)
{
    if(i==1)
    {
        return 1;
    }
    return i * fact(i-1);
}
console.log(fact(5));