

class siteConstroller{
    // [GET] /
    index(req,res,next){
        res.render('main')
    }
  
}
module.exports = new siteConstroller();