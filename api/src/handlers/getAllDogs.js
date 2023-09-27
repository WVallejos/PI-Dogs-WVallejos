const { getDogs } = require('../controllers/getDogs')
const {getDogName} = require('../controllers/getDogName')

const getAllDogs = async (req, res) => {
    try {
        const { name } = req.query
        if (name) {
            const dog = await getDogName(name)
            res.status(200).json(dog)
        } else {
            const allDogs = await getDogs()
            res.status(200).json(allDogs)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
}

module.exports = getAllDogs