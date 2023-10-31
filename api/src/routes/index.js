const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogsAPI = require('../handlers/getDogsAPI')
const getDogsDB = require('../handlers/getDogsDB')
const getAllDogs = require('../handlers/getAllDogs')
const getDogById = require('../handlers/getDogById')
const postDog = require('../handlers/postDog')
const getTemperaments = require('../handlers/getTemperaments');
const { getDogs } = require('../controllers/getDogs');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogsapi', getDogsAPI)
router.get('/dogsdb', getDogsDB)
router.get('/dogs', getAllDogs)
router.get('/dogs/:idRaza', getDogById)
router.post('/dogs', postDog)
router.get('/temperaments', getTemperaments)
router.get('/filterDogs', async (req, res) => {
    try {
        const {temp} = req.query
        const allDogs = await getDogs()
        // res.json(allDogs[0].temperament)
        const filteredDogs = allDogs.filter((d) => d.temperament && d.temperament.includes(temp))
        res.status(200).json(filteredDogs) 
        
    } catch (error) {
        res.status(500).json(error.message)
    }
    
})

module.exports = router;
