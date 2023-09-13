const  {getDog}  = require('../controllers/getDog')

const getDogById = async (req, res) => {
    try {
        const {idRaza} = req.params;
        const dog = await getDog(idRaza)
        res.status(200).json(dog)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = getDogById