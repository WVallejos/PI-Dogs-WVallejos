const { Dog, Temperament } = require('../db')

const fillDB = async () => {
    const perro1 =
        {
            name: 'firu',
            image: 'asdas',
            height: '23',
            weight: '324',
            life_span: '32'

        }
    const perro2 =
        {
            name: 'Mona',
            image: 'asddasas',
            height: '24323',
            weight: '3254',
            life_span: '372'

        }
    const dog1 = await Dog.create(perro1)
    const dog2 = await Dog.create(perro2)
    const temp1 = await Temperament.create({name: 'loco'})
    const temp2 = await Temperament.create({name: 'lindo'})
    const temp3 = await Temperament.create({name: 'bueno'})
    dog1.addTemperament(temp1)
    dog1.addTemperament(temp2)
    dog2.addTemperament(temp3)
}
const formatDog = (data) => {
    
   return data.map((e) => {
        return {
          id: e.id,
          name: e.name,
          life_span: e.life_span,
          temperament: e.temperament,
          image: e.image.url,
          weight: e.weight.imperial,
          height: e.height.imperial,
        };
      })
}

module.exports = {fillDB,
formatDog}