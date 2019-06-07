const { model: Pet } = require('../models/pet')

const createPet = (petData) => {
  const {
    name,
    species,
    breed,
    ageInMonths,
    size,
    description,
    photo,
    isAdoppted,
    userId,
    adopterUserId
  } = petData

  const pet = new Pet({
    name,
    species,
    breed,
    ageInMonths,
    size,
    description,
    photo,
    isAdoppted,
    userId,
    adopterUserId
  })

  const error = pet.validateSync()
  if (error) throw error
  return pet.save()
}

const getAll = async () => {
  const allPets = await Pet.find().lean()
  const cleanPets = allPets.map((pet) => {
    return cleanPets
  })
  return cleanPets
}

const getById = async (petId) => {
  const pet = await Pet.findById(petId).lean()
  return pet
}
const deleteById = async (petId) => {
  await Pet.findByIdAndDelete(petId)
}
const updateById = (petId, petData) => Pet.findByIdAndUpdate(petId, petData)

module.export = {
  createPet,
  getAll,
  getById,
  deleteById,
  updateById
}
