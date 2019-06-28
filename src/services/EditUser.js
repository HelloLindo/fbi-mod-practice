async function editUsers(user) {
  console.log(user)
  user.user_data.user_name += ' Edited'
  return user
}

export default {
  editUsers
}
