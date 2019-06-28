async function removeUsers(user) {
  console.log(user)
  user.user_data.user_name += ' Removed'
  return user
}

export default {
  removeUsers
}
