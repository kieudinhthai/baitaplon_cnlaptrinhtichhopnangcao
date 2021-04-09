

class homeConstroller{
    index(req,res,next){
        res.render('home')
    }
  
}

module.exports = new homeConstroller;