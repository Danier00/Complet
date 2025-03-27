const productsRouter=require('./products.router')
const usersRouter=require('./users.router')
const cateRouter=require('./categories.router')

const routerApi=(app)=>{
  app.use('/products',productsRouter)
  app.use('/users',usersRouter)
  app.use('/categories',cateRouter)
}

module.exports=routerApi
