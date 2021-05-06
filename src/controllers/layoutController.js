
const Product = require("./models/products")
const Category = require("./models/categories")
const { multipleMongooseToObject, mongooseToObject } = require("../util/mongoose");

class layoutController{
  
 //     [GET] /layout/products/
 get_all_products(req,res,next){
   
        Product
            .find({})
            .then(products => res.render('layouts/Products', {
                products: multipleMongooseToObject(products)
            }))
            .catch(next)

    }

//     [GET] /layout/products/.....
 get_products(req,res,next){
    Product
    .find({"category.id": req.params.category_id})
        .then(products => res.render('layouts/Products', {
            products: multipleMongooseToObject(products),
           
        }))
        .catch(next)
    

}



 //     [GET] /layout/detail/....
 show_detail(req,res,next){
    let product, productList
    Product
        .findOne({_id: req.query.key})
            .then(
                products=>{
                  
                    product = products
                     console.log(product)
                    // console.log(product.category.id)
                }
            )
            .then(()=>{
                Product.find({"category.id": product.category.id})
                .then(productsL=>{
                    productList = multipleMongooseToObject(productsL);
                    let data = Object.values(productList);
                    
                    let type = typeof(data);
                  
                    console.log('type',type );

                    res.render('layouts/Product_Detail',{ 
                        product,
                        productList :data
                     })
                   
                })
                .catch((next)=>{
                    console.log('loi 1');

                    console.log(next);
                });
            })
            .catch((next)=>{
                console.log('loi 2');

                console.log(next);
            })
}

    

}
module.exports = new layoutController();