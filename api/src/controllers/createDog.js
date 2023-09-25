
const { Dog, Temperament } = require("../db");
const { getDogName } = require("./getDogName");

const createDog = async (name, life_span, temperament, image, weight, height) => {
    try {
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
        const dogToReturn = await getDogName(dogCreated.name)
        return dogToReturn[0]
    } catch (error) {
        throw error
    }
}

module.exports = {createDog}