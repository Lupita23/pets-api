// descripcion del modelo
// const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const petsSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    pattern: /[a-zA-Z]{2,50}$/
  },
  ageInMonths: { // months
    type: Number,
    minlength: 1,
    required: true
  },
  size: {
    type: String,
    enum: [
      'smoll',
      'medium',
      'large'
    ],
    required: true
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 300,
    required: false
  },
  photo: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300
  },
  isAdoppted: {
    type: Boolean,
    deafult: false
  },
  userId: {
    type: String,
    required: true
  },
  adopterUserId: {
    type: String,
    required: true
  }
})

module.exports = {
  Schema: petsSchema,
  model: model('Pets', petsSchema)
}
