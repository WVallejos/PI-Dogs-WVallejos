const { Dog, Temperament } = require("../db");

const getFromDB = async () => {
    try {
        const dogsDb = (await Dog.findAll({
            include: {
                model: Temperament,
                as: 'temperament',
                attributes: ['name'],
                through: {
                    attributes: []
                }

            }
        })).map(record => record.toJSON()) // returns a JSON object instead of a sequealize object so I can perform js opetations.
        
        // Format the response from the databe to match the API format
        console.log(dogsDb);
        let formattedDogs = dogsDb.map((dog) => {
            return {
                ...dog,
                temperament: dog.temperament.map((temp) => temp.name).join(', ')
            }
        })

        return formattedDogs
    } catch (error) {
        throw new Error (error)
    }
}

module.exports = { getFromDB }