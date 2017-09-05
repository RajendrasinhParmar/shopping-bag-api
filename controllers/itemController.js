function getAllItems(cb) {
    return cb({items: [
        {
            itemId:"LN332",
            name: "Isla Bra",
            price: "£29"
        },
        {
            itemId:"LN336",
            name: "Nordic Rose Bra",
            price: "£30"
        },
        {
            itemId:"FY240",
            name: "Zentangle Bra",
            price: "£34"
        },
        {
            itemId:"PN112",
            name: "Clara Bra",
            price: "£32"
        },{
            itemId:"FY158",
            name: "Deco Delight Bra",
            price: "£34"
        },
        {
            itemId:"LN328",
            name: "Sienna Bra",
            price: "£32"
        },
    ]});
}


exports.getAllItems = getAllItems;