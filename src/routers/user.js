const express = require('express')
const user = require('../usecases/user')
const router = express.Router()

router.post('/', async function (req, res) {
  try {
    const newUserData = req.body
    const newUser = await user.singUp(newUserData)
    res.json({
      success: true,
      message: 'User created successfuly',
      payload: {
        user: newUser
      }
    })
  } catch (error) {
    console.log('Error', error)
    res.status(200)
    res.json({
      success: false,
      message: 'Cannot create user',
      error: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    console.log('tytytyu')
    const allUsers = await user.getAll()
    console.log('dos')
    res.json({
      success: true,
      message: 'All user',
      payload: {
        users: allUsers
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot create user',
      error: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundUser = await user.getById(id)
    res.json({
      success: true,
      message: 'user found',
      payload: {
        user: foundUser
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      success: false,
      message: 'user not found',
      error: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteUser = await user.deleteById(id)
    res.json({
      success: true,
      message: 'delete user',
      payload: {
        user: deleteUser
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      success: false,
      message: 'delete not found',
      error: error.message
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const newUserData = req.body
    const updateUser = await user.updateById(id, newUserData)
    res.json({
      success: true,
      message: 'User updated',
      payload: {
        user: updateUser
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot ',
      error: error.message
    })
  }
})
module.exports = router
