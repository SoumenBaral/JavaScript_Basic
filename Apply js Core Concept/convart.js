function inch_feet(inch){
    const convert = inch/12;
    return convert;
}
function mileToKilometer(mile)
{
    const Km =mile*1.6;
    return Km;
}
const dadiDilo = inch_feet(120);
console.log(dadiDilo);
const nanaFeet = inch_feet(144);
console.log("nana Feet :",nanaFeet);
const dadaKoilo =mileToKilometer(20);
console.log(dadaKoilo); 