const mainRouter = require('./main')
const adminRouter = require('./admin')
//const booksRouter = require('./books')
function route(app){
    app.use('/',mainRouter);
    app.use('/admin/',adminRouter)
 //   app.use('/books/',booksRouter)
}


module.exports = route;