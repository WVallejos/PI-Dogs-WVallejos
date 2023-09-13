const { Dog, Temperament } = require("../db");


const postDog = async (req, res) => {
    try {
        const { name, life_span, temperament, image, weight, height } = req.body;
        console.log(temperament);
        const dogCreated = await Dog.create({
            name: name,
            image: image,
            height: height,
            weight: weight,
            life_span: life_span,
        });

        for (const temp of temperament) {
            let [temperament, created] = await Temperament.findOrCreate({where: {
                name: temp
            }})
            await dogCreated.addTemperament(temperament)
        }
        res.json('Dog created succesfully')
    } catch (error) {
        res.status(500).json('Error creating a dog')
    }
}

module.exports = postDog