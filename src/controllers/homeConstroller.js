

class homeConstroller{
    // [GET] /
    index(req,res,next){
        res.render('home')
    }
  
}
module.exports = new homeConstroller;