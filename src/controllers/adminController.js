
const Product = require("./models/products")
const { multipleMongooseToObject } = require("../util/mongoose");

class adminController{
    // [GET] /admin/
    index(req,res,next){
        Product
        .find({})
        .then(products => res.render('admin/index',{
            products: multipleMongooseToObject(products)
        }))
        .catch(next)
 
    }

    //[POST] /admin/product
    insert(req,res,next){
         var add = new Product(req.body)
      console.log(add)
        add
        .save()
        .then(() => res.redirect("/admin/"))
        .catch((error) => {});
    }
  
}
module.exports = new adminController();