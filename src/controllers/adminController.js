const Product = require("./models/products")
const Acount = require("./models/acount")
const Category = require("./models/categories")
const { multipleMongooseToObject } = require("../util/mongoose");
const { mongooseToObject } = require("../util/mongoose")
const mongoose = require("mongoose");


class adminConstroller {
    // [GET] /admin/login
    showlogin(req,res,next){
        res.render('admin/login')
    }
    
    login(req, res, next) {
        Acount
        .findOne({user:req.body.username},function(err,data){
            if(data){
                if(data.password==req.body.password){
                    console.log("Done Login");
                    req.session.userId = data._id;
                    console.log(req.session.userId);
                    res.redirect('/admin');                    
                }else{
                    res.redirect('/admin/login');
                }
            }else{
                res.redirect('/admin/login');
            }
           
        })
        .catch()
    };



    index(req, res, next) {
        let product, products, categories
        console.log('index');
        console.log(req.session.userId);
        Acount
        .findOne({_id: req.session.userId})
            .then(
                productObj=>{
                    product = productObj
                    console.log(product);
                }
            )
        .then(()=>{
         Category.find({})
            .then(category => categories = multipleMongooseToObject(category))
        })
        .then(()=>{
            Product.find({})
                .then(productList=>{
                    products = Object.values(multipleMongooseToObject(productList))
                   if (!product) {
                       res.redirect('/admin/login')
                   }
                   else{
                    res.render('admin/index',{products, categories})
                   }
                   
                })
                .catch(next)
        })
        .catch(next)
    };
    
    logout(req, res, next) {
        console.log("logout")
        if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            
            if (err) {
                return next(err);
            } else {
                return res.redirect('/admin/login');
            }
        });
    }
    };

 
    getCategories(req, res, next){
        let categories
        Category
        .find({})
        .then(category=>{
            categories = Object.values(multipleMongooseToObject(category))
    
            res.render('admin/adminCategories',{categories})
         
           
        })
        .catch(next)

        
    }
    getProducts(req, res, next){
        res.render('admin/adminProducts')
    }
    getBin(req, res, next){
        res.render('admin/recycle_bin')
    }



}

module.exports = new adminConstroller();