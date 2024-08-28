// data access
const data = [{id:1, name: 'abul', address: 'khilkhet'}];
// access address: 
console.log(data[0].address);

const products ={
    count: 5000,
    data: [{
        id:1,
        name: 'product 1',
        price: 100
    },
    {
        id:2,
        name: 'product 2',
        price: 200
    }]
}
// second product price
console.log(products.data[1].price);