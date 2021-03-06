import ApiRouter from './api'
import Router from 'koa-router'

class AppRouter {
  constructor() {
    this.router = new Router()
    this.api()
  }

  api() {
    this.router.use(new ApiRouter().router.routes())
  }
}

export default () => {
  const appRouter = new AppRouter()
  return appRouter.router
}
