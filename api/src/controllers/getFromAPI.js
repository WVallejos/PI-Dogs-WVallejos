require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const {formatDog} = require('../utils/utils')

const getFromAPI = async () => {
    try {
        const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        
        const apiInfo = await formatDog(data)
        return apiInfo;
    } catch (error) {
      console.log(error);
        throw new Error('Could not get any dog')        
    }
}

module.exports = { getFromAPI };