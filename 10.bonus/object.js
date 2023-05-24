const student = {
    name : "Nura Alam",
    id   : 7036,
    section: "portugal 3c",
    isSingle : false,
    friends:["alamin","moushumi","Anik","Rana"],
    act: function(){
        console.log("Act like a heroin");
    },
    movie:[{name:'king khan ',Year: 2002,supperhit:false },
    {name:'king khan ',Year: 2002,supperhit:false },
    {name:'Amir khan ',Year: 2007,supperhit:false },
    {name:'salman khan ',Year: 2004,supperhit:false },],
    car:{
        brand: "Maruti",
        price : 1100000,
        color : 'Red'
    }
}
// console.log(student.car.price);
// console.log(student.act());
console.log(student.movie[2].name);