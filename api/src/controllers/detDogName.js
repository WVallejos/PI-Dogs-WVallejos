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
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    return dogsName
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports = {getDogName} 