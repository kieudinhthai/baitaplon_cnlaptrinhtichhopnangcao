const Product = require("./models/products")
const { multipleMongooseToObject } = require("../util/mongoose");
const { mongooseToObject } = require("../util/mongoose")
const mongoose = require("mongoose");
const products = require("./models/products");

class adminConstroller {
    // [GET] /admin/
    index(req, res, next) {
        console.log("http://localhost:3005/admin/index")
        Product
            .find({})
            .then(products => {
                res.render('admin/index', {
                    products: multipleMongooseToObject(products)
                })
            })
            .catch(next)

    }

    //[POST] /admin/product------------------------------
    waitInsert(req,res,next){
        // let newId = ""
        // Product
        //     .find({})
        //     .then( products=>{
        //         multipleMongooseToObject(products).forEach(data => {
        //             // console.log(data.id)
        //             if(data.id>newId)
        //                 newId=data.id
        //         })
        //     })
        res.render("admin/insertProducts")
    }
    insert(req, res, next) {
        let newId = ""
        Product
            .find({})
            .then( products=>{
                multipleMongooseToObject(products).forEach(data => {
                    if(data.id>newId)
                        newId=data.id
                })
            })
            .then(()=>{
                console.log("newId"+newId)
                var add = new Product(req.body)
                add.id = newId
                console.log(add)
                add
                    .save()
                    .then(() => res.redirect("/admin/"))
                    .catch((error) => {});
            })
            .catch(next)
    }

    // find products anywhere----------------------------
    findProduct(req, res, next) {
        Product
            .find({ $or: [{ name: req.query.key }, { vn_name: req.query.key }, { price: req.query.key }, { rate: req.query.key }, { id: req.query.key }] })
            .then(products => res.render('admin/index', {
                products: multipleMongooseToObject(products)
            }))
            .catch(next)
    }
    findProductBy_id(req, res, next) {
        Product
            .findOne({"category.id":req.query.key})
            .then(products => res.render('admin/index', products))
            .catch(next)
    }
    // findOneProductName(req, res, next) {
    //     console.log("abc@123")
    //     Product.findOne({ name: req.query.key }, (doc) => {
    //         console.log(doc)
    //         res.json(doc)
    //     })
    // }
    findCategory(req, res, next){
        console.log("findCategory")
        Product
            .find({$or:[{"category.id": req.query.key},{"category.name": req.query.key}]})
            .then(products =>res.render('admin/index', {
                products: multipleMongooseToObject(products)
            }))
    }

    //update -------------------------
    waitUpdate(req, res, next) {
        console.log("function:// wait Update, url:/admin/productUpdate/?key, view:admin/updateProducts.ejs")
        Product
            .findById({ _id: req.query.key })
            .then(
                products => {
                    res.render('admin/updateProducts', {
                        products: mongooseToObject(products)
                    })
                }
            )
            .catch(next)
    }

    update(req, res, next) {
        Product
        .findOneAndUpdate({_id: req.body._id}, req.body)
        .then(
            setTimeout(() => {
                console.log("\x1b[32m","\nUpdate successfull - products._Id:{"+req.body._id+"}; redirect to ")
                res.redirect('../') // redirect to http://localhost:3005/admin/index
            }, 500) // timeout chờ mongodb cập nhật
        )
    }

}
module.exports = new adminConstroller();