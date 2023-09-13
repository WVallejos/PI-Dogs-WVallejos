const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogsAPI = require('../handlers/getDogsAPI')
const getDogsDB = require('../handlers/getDogsDB')
const getAllDogs = require('../handlers/getAllDogs')
const getDogById = require('../handlers/getDogById')
const postDog = require('../handlers/postDog')
const getTemperaments = require('../handlers/getTemperaments')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogsapi', getDogsAPI)
router.get('/dogsdb', getDogsDB)
router.get('/dogs', getAllDogs)
router.get('/dogs/:idRaza', getDogById)
router.post('/dogs', postDog)
router.get('/temperaments', getTemperaments)

module.exports = router;
