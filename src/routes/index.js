const homeRouter = require('./home')
const adminRouter = require('./admin')
//const booksRouter = require('./books')
function route(app){
    app.use('/',homeRouter);
    app.use('/admin/',adminRouter)
 //   app.use('/books/',booksRouter)
}


module.exports = route;