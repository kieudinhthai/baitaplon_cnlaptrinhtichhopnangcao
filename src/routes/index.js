const homeRouter = require('/home')

function route(app){
    app.use('/',homeRouter)
}


module.exprort = route;