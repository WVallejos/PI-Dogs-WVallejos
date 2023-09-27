require('dotenv').config();
const { API_KEY } = process.env;
const {getFromDB} = require('./getFromDB')
const axios = require('axios')
const {formatDog} = require('../utils/utils')

const getDogName = async (name) => {
    try {
        const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`)
        if (data.length) {
            const dog = await formatDog(data)
            return dog
        } else {
            const dogsDb = await getFromDB()
            let dogsName = await dogsDb.filter((el) =>
      el.name.toLowerCase() === name.toLowerCase());
      if (dogsName.length != 0) return dogsName
      else throw new Error(`We could not find any dog with name ${name} `)
        }
    } catch (error) {
        throw error
    }
}

module.exports = {getDogName} 