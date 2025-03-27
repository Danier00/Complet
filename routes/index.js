const productsRouter=require('./products.router.js')
const usersRouter=require('./users.router.js')
const cateRouter=require('./categories.router.js')

const routerApi=(app)=>{
  app.use('/products',productsRouter)
  app.use('/users',usersRouter)
  app.use('/categories',cateRouter)
}

module.exports = routerApi
