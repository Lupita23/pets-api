// import { Schema } from "mongoose";
const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100

  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  age: {
    type: Number,
    min: 18
  },
  password: {
    type: String,
    required: true,
    minlength: '1',
    maxlength: '200'
  },
  type: {
    type: String,
    default: 'adopter',
    enum: [
      'admin',
      'adopter'
    ]
  },
  address: {
    type: String,
    required: true,
    maxlength: 200
  },
  phone: {
    type: String,
    required: true
    // pattern: /^[0-9]{8,15}$ //
  }
})

module.exports = {
  Schema: userSchema,
  model: model('User', userSchema)
}
