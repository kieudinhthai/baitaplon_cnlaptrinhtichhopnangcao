
const Product = require("./models/products")
const { multipleMongooseToObject } = require("../util/mongoose");

class layoutController{
    // [GET] /layout/products
    show(req,res,next){
        Product
        .then(res.render('layouts/Products'))
        .catch(next)
    }

    //[GET] /layout/product-detail
    show_detail(req,res,next){
        Product
        .then(res.render('layouts/Product_Detail'))
        .catch(next)
    }
}
module.exports = new layoutController();