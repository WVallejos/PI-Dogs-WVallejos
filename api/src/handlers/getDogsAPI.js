const { getFromAPI } = require('../controllers/getFromAPI')


const getDogsAPI = async (req, res) => {
    try {
        let dogsAPI = await getFromAPI()
        res.status(200).send(dogsAPI)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = getDogsAPI;