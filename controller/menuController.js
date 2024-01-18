const db = require("../models");
const { createMenu, viewMenu } = require("../repository/menuRepository");

exports.addData = async (req, res, next) => {
    const nameData = req.body.name;
    const priceData = req.body.price;
	try{
        const menu = await createMenu(nameData, priceData)
        
        res.json({
            message: "Menu item added successfully",
            item: menu
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            error: "error occurred"
        })
    }
};

exports.getData = async (req, res, next) => {
	try{
        const menu = await viewMenu();
        res.json({menu})
    }catch(error){
        console.log(error)
        res.status(500).json({
            error: "error occurred"
        })
    }
};
