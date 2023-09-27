const { getDogs } = require('../controllers/getDogs');

const getDogById = async (req, res) => {
    try {
        const {idRaza} = req.params;
        const allDogs = await getDogs()
        let dogsId = allDogs.filter((dog) => dog.id == idRaza)
        console.log(dogsId.length);
        if (dogsId.length != 0) res.status(200).json(dogsId[0])
        else throw new Error('The dog is not found')
    } catch (error) {
        res.status(404).json(error.message) 
    }
}

module.exports = getDogById