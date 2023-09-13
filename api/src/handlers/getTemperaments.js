const axios = require('axios')
const { Temperament } = require('../db')


const getTemperaments = async (req, res) => {
    const {data} = await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=live_lygcL2Pvit0ovAXFR3XXdg8pYakJvcSsiOHFz4rtYgd6ua0m0LMoMeMMlh7iPVDx`
      );

    let allTemperaments = data
    .map((breed) => breed.temperament) // array de temperamentos [ 'lindo, geo, nansl' , 'alto, sda, ,ds']
    .filter((temp) => temp != null) // saco vacios
    .join(',') // [ 'lindo, geo, nansl , alto, sda, ,ds']
    .split(',') //  ['lindo, geo, nansl , alto, sda, ,ds']
    .map((temp) => temp.trim())

    for (const temp of allTemperaments) {
        await Temperament.findOrCreate({where: {
             name: temp
        }})
    }

    const allTemps = await Temperament.findAll()    
    
    res.status(200).json(allTemps)
}

module.exports = getTemperaments