// task 3: access and then show habluder adda;
// show output Begineer

let data2 = {
    data: [
        {
            bookId: 1, 
            bookDetailes: {
                name: "habluder adda", 
                category: "XYZ",
                price: "20$",
            },
            bookCategory: "Basic",
        },
        {
            bookId: 2, 
            bookDetailes: {
                name: "gobluder adda", 
                category: "ABC",
                price: "40$",
            },
            bookCategory: "Begineer",
        }
    ]
}
const habludeerAdda = data2.data[0].bookDetailes.name;
const beginneOutput = data2.data[1].bookCategory;
console.log(habludeerAdda, beginneOutput)