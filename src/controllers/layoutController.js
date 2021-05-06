
const Product = require("./models/products")
const { multipleMongooseToObject } = require("../util/mongoose");
const { mongooseToObject} = require("../util/mongoose");
const { json } = require("express");

class layoutController{
    // [GET] /layout/products
    show(req,res,next){
        Product
        .then(res.render('layouts/Products'))
        .catch(next)
    }

    //[GET] /layout/product-detail
    // show_detail(req,res,next){
    //     Product
    //     .then(res.render('layouts/Product_Detail'))
    //     .catch(next)
    // }

    ProductDetail(req,res,next){
        let product, productList=[], len
        Product
            .findOne({_id: req.query.key})
                .then(
                    products=>{
                        // id11 = products.category.id
                        product = products
                        console.log(product)
                        // console.log(product.category.id)
                    }
                )
                .then(()=>{
                    Product.find({"category.id": product.category.id })
                    .then(productsL=>{
                        productsL.forEach(element => {
                            productList.push(element)
                        });
                        console.log(productList)
                        // console.log()
                    })
                })
                .then(()=>{
                    res.render('layouts/Product_Detail',{ 
                        productList ,product
                    })
                })
    }
        
}
module.exports = new layoutController();