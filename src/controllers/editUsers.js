import editUsersService from '../services/EditUser'

export default router => {
  // GET http://localhost:3000/api/editUsers
  // POST http://localhost:3000/api/editUsers
  // PUT http://localhost:3000/api/editUsers
  // patch http://localhost:3000/api/editUsers
  // delete http://localhost:3000/api/editUsers
  router
    .get('/editUsers', async ctx => {
      ctx.body = {
        code: 0,
        data
      }
    })
    .post('/editUsers', async ctx => {
      let receiveData = ctx.request.body
      ctx.body = {
        code: 0,
        data: await editUsersService.editUsers(receiveData)
      }
    })
    .put('/editUsers/:id', async ctx => {
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
    .patch('/editUsers/:id', async ctx => {
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
    .delete('/editUsers/:id', async ctx => {
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
