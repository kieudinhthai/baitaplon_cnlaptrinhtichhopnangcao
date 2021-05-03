const siteRouter = require('./site')
const adminRouter = require('./admin')
<<<<<<< HEAD
    //const insertRouter = require('./post_test')
    //const booksRouter = require('./books')
function route(app) {
    //  app.use('/insert/',insertRouter)
    app.use('/admin', adminRouter)
    app.use('/', siteRouter);

    //   app.use('/books/',booksRouter)
=======
const layoutRouter = require('./layout')


function route(app){

   app.use('/admin/',adminRouter)
   app.use('/layout/', layoutRouter)
   app.use('/',siteRouter);
    

>>>>>>> origin/thai_branch
}


module.exports = route;