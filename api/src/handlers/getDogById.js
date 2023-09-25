const { getDogs } = require('../controllers/getDogs');

const getDogById = async (req, res) => {
    try {
        const {idRaza} = req.params;
        const allDogs = await getDogs()
        let dogsId = allDogs.filter((dog) => dog.id == idRaza)
        res.status(200).json(dogsId[0])
    } catch (error) {
        res.status(500).json(error) 
    }
}

module.exports = getDogById