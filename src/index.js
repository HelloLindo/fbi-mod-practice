import Koa from 'koa'
import logger from 'koa-logger'
import bodyparser from 'koa-bodyparser'
// 引入koa2-cors在中间层处理跨域请求问题
import cors from 'koa2-cors'
import configs from './configs'
import errorHandler from './middlewares/error-handler'
import routes from './routes/index'

const app = new Koa()

// Log & Error hander
app.use(logger())
app.use(errorHandler())
app.use(bodyparser())

// 添加跨域设置
app.use(
  cors({
    // Reference: https://blog.csdn.net/qq_30868289/article/details/83657535
    origin: function(ctx) {
      // if (ctx.url === '/test') {
      return '*' // 允许来自所有域名请求
      // }
      // return "http://localhost:8080"; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    }
  })
)

const router = routes()
app.use(router.routes()).use(
  router.allowedMethods({
    throw: true
  })
)

// Listen
const port = configs.server.port || 3000
app.listen(port, err => {
  if (err) {
    throw err
  }
  console.log(`Server started at http://localhost:${port}`)
})

export default app
