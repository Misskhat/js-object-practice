// task 1: console log secondary school location of sophia;
let data = {
    sophia: {
        id: 33,
        study: [
            {
                primary: [
                    {school_name: "ABC primary school"},
                    {location: "Peters burg"}
                ]
            },
            {
                secondary: [
                    {school_name: "ABC secondary school"},
                    {location: "St Lorence"},
                ]
            },
        ],
    },
}

// answer
console.log(data.sophia.study[1].secondary[1].location);