
class adminConstroller{
    // [GET] /admin/
    index(req,res,next){
        res.render('admin/login')
    }
  
}
module.exports = new adminConstroller;