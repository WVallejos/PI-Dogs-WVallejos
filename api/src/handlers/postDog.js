const { Dog, Temperament } = require("../db");
const { createDog } = require("../controllers/createDog");


const postDog = async (req, res) => {
    try {
        const { name, life_span, temperament, image, weight, height } = req.body;
        let createdDog = await createDog(name, life_span, temperament, image, weight, height)
        res.status(200).json(createdDog)
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            res.status(400).json('The dog you are trying to create already exists')
        } else res.status(500).json(error.message)
    }
}

module.exports = postDog