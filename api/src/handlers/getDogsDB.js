const { getFromDB } = require('../controllers/getFromDB')

const getDogsDB = async (req, res) => {
    try {
        let dogsDB = await getFromDB()
        res.status(200).json(dogsDB)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = getDogsDB;