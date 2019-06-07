const { model: User } = require('../models/user')
const bcrypt = require('../lib/bcrypt')
const singUp = async (userData = {}) => {
  const {
    email,
    name,
    lastName,
    age,
    password,
    type,
    address,
    phone
  } = userData
  const hash = await bcrypt.hash(password)
  // if (error) throw error

  const user = new User({
    email,
    name,
    lastName,
    age,
    password,
    type,
    address,
    phone

  })
  const error = user.validateSync()
  if (error) throw error
  return user.save()
}

const getAll = async () => {
  const allUsers = await User.find().lean()
  const cleanUsers = allUsers.map((user) => {
    const { password, ...cleanUser } = user
    return cleanUser
  })
  return cleanUsers
}

const getById = async (userId) => {
  const user = await User.findById(userId).lean()
  if (!user) throw new Error('User not found')
  const { password, ...cleanUser } = user
  return cleanUser
}

const deleteById = async (userId) => {
  await User.findByIdAndDelete(userId)
}

const updateById = (userId, userData) => User.findByIdAndUpdate(userId, userData)

module.exports = {
  singUp,
  getAll,
  getById,
  deleteById,
  updateById
}
