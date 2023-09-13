const { getDogs } = require('../controllers/getDogs')
const {getDogName} = require('../controllers/detDogName')

const getAllDogs = async (req, res) => {
    try {
        const { name } = req.query
        if (name) {
            const dog = await getDogName(name)
            dog ? res.status(200).json(dog) : res.status(404).json(`Dog with name: ${name} was not found`)
        } else {
            const allDogs = await getDogs()
            res.status(200).json(allDogs)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = getAllDogs