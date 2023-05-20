var penPort = {
    Brash: 2,
    pepsuderent: 1,
    knive: 1,
    marker:1,
    pen: 10
}
var myPen = penPort.pen;
const keys = Object.keys(penPort);
const value = Object.values(penPort)
console.log(keys);
console.log(value);
console.log(myPen);
Object.entries('zoo')
for(const properpty in penPort)
{
    const value =penPort[properpty];

    console.log(properpty ,value);
    // console.log(value); 
}