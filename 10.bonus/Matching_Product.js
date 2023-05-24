const products =[
    {id:1,name:"walton Phone",price:12000},
    {id:2,name:"IPhone",price:99000},
    {id:3,name:"Hp eliteBook folio laptop",price:144000},
    {id:4,name:"vivo Y50 phONE",price:24000},
    {id:5,name:"Apple watch",price:3000},
    {id:6,name:"walton prime laptop",price:20000}

]

function SearchProducts(products,search) {
    const match = [];
    for(const product of products)
    {
       if(product.name.toLowerCase().includes(search.toLowerCase()))
       {
        match.push(product)
       }
    }
    return match;
}
const match = SearchProducts(products,'PHONE')
console.log(match);