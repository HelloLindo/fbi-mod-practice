import pullUsersService from '../services/PullUser'

export default router => {
  // GET http://localhost:3000/api/pullUsersService
  // POST http://localhost:3000/api/pullUsersService
  // PUT http://localhost:3000/api/pullUsersService/123
  // patch http://localhost:3000/api/pullUsersService/123
  // delete http://localhost:3000/api/pullUsersService/123
  router
    .get('/pullUsers', async ctx => {
      // 没有收到正确参数默认返回10个
      let receiveData = ctx.request.query.num_of_users || 10
      ctx.body = {
        code: 0,
        data: await pullUsersService.pullUsers(receiveData)
      }
    })
    .post('/pullUsers', async ctx => {
      const data = ctx.request.body
      ctx.body = {
        code: 0,
        data
      }
    })
    .put('/pullUsers/:id', async ctx => {
      const id = ctx.params.id
      const data = ctx.request.body
      ctx.body = {
        code: 0,
        data: {
          ...data,
          id
        }
      }
    })
    .patch('/pullUsers/:id', async ctx => {
      const id = ctx.params.id
      const data = ctx.request.body
      ctx.body = {
        code: 0,
        data: {
          ...data,
          id
        }
      }
    })
    .delete('/pullUsers/:id', async ctx => {
      const id = ctx.params.id
      const data = ctx.request.body
      ctx.body = {
        code: 0,
        data: {
          ...data,
          id
        }
      }
    })
}
