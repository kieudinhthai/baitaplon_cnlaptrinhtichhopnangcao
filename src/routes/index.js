const siteRouter = require('./site')
const adminRouter = require('./admin')
//const insertRouter = require('./post_test')
//const booksRouter = require('./books')
function route(app){
  //  app.use('/insert/',insertRouter)
    app.use('/admin/',adminRouter)
   app.use('/',siteRouter);
    
 //   app.use('/books/',booksRouter)
}


module.exports = route;