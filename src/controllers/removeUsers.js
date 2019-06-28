import removeUsersService from '../services/RemoveUser'

export default router => {
  // GET http://localhost:3000/api/removeUsers
  // POST http://localhost:3000/api/removeUsers
  // PUT http://localhost:3000/api/removeUsers/123
  // patch http://localhost:3000/api/removeUsers/123
  // delete http://localhost:3000/api/removeUsers/123
  router
    .get('/removeUsers', async ctx => {
      ctx.body = {
        code: 0,
        data
      }
    })
    .post('/removeUsers', async ctx => {
      let receiveData = ctx.request.body
      ctx.body = {
        code: 0,
        data: await removeUsersService.removeUsers(receiveData)
      }
    })
    .put('/removeUsers/:id', async ctx => {
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
    .patch('/removeUsers/:id', async ctx => {
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
    .delete('/removeUsers/:id', async ctx => {
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
