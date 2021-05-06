const Product = require("./models/products")
const { multipleMongooseToObject } = require("../util/mongoose");


class siteController {
    // [GET] /
    index(req, res, next) {
        Product
            .find({}).skip(27)
            .then(products => res.render('main', {
                products: multipleMongooseToObject(products)
            }))
            .catch(next)

    }

    // [GET] /search
    search(req, res, next) {
        Product
            .find({ name: new RegExp(req.query.q, 'i') })
            .then(products => res.render('main', {
                products: multipleMongooseToObject(products)
            }))
            .catch(next)
    }

}

module.exports = new siteController();

