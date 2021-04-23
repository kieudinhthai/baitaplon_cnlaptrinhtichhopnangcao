

class homeConstroller{
    // [GET] /
    index(req,res,next){
        res.render('main')
    }
  
}
module.exports = new homeConstroller;