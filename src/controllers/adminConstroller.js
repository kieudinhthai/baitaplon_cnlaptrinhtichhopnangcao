const Product = require("./models/products")
const { multipleMongooseToObject } = require("../util/mongoose");
const { mongooseToObject } = require("../util/mongoose")
const mongoose = require("mongoose")

class adminConstroller {
    // [GET] /admin/
    index(req, res, next) {
        // console.log("index")
        Product
            .find({})
            .then(products => {
                res.render('admin/index', {
                    products: multipleMongooseToObject(products)
                })
                console.log(products[0])
            })
            .catch(next)

    }

    //[POST] /admin/product
    insert(req, res, next) {
        var add = new Product(req.body)
        console.log(add)
        add
            .save()
            .then(() => res.redirect("/admin/"))
            .catch((error) => {});
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
            .find({_id: req.query.key})
            .then(products => res.render('admin/index', {
                products: multipleMongooseToObject(products)
            }))
            .catch(next)
    }

    findOneProductName(req, res, next) {
        console.log("abc@123")
        Product.findOne({ name: req.query.key }, (doc) => {
            console.log(doc)
            res.json(doc)
        })
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
        var newdata = Product.findOne({ productID: req.body.productID })
        newdata.set(req.body)
        var newdata = newdata.save()
        console.log()

        Product
            .find()
            .then(products => res.render('admin/index', {
                products: mongooseToObject(products)
                
            }))
            .catch(next)
    }


}
module.exports = new adminConstroller();