

class siteConstroller{
    // [GET] /
    index(req,res,next){
        res.render('home')
    }
  
}
module.exports = new siteConstroller;