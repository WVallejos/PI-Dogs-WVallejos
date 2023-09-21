const { getDogs } = require('./getDogs')

const getDog = async (id) => {
    try {
        const allDogs = await getDogs()
        let dogsId = await allDogs.filter((dog) => dog.id == id)
        return dogsId[0]
    } catch (error) {
        throw new Error(`Dog with id ${id} cannot be found`)
    }
}

module.exports = {getDog};