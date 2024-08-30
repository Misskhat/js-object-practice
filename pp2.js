// task 2: console log output Petersburg, Herry
let student = {
    2222: {
        name: "Jack",
        section: "C",
        class: "XI",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },

    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC Road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}

// answer
const firstStudenCityName = student[2222].address["city"];
const secondStudenCityName = student[3333].name;

console.log(`first problem console log console log === ${firstStudenCityName}, second problem console log === ${secondStudenCityName} `)
console.log(firstStudenCityName, secondStudenCityName)