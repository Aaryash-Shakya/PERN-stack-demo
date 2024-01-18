const db = require("../models");

exports.createMenu=async (name, price)=>{
    return await db.Menu.create({
        name: name,
        price: price
    })
}

exports.viewMenu=async()=>{
    return await db.Menu.findAll()
}