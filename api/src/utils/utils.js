const { Dog, Temperament } = require('../db')

const fillDB = async () => {
    const perro1 =
        {
            name: 'firulais',
            image: 'https://soyfotografodeperros.com/wp-content/uploads/2019/10/firulais.jpg',
            height: '23',
            weight: '324',
            life_span: '32'

        }
    const perro2 =
        {
            name: 'ayudante de santa',
            image: 'https://w7.pngwing.com/pngs/18/711/png-transparent-santa-s-little-helper-santa-claus-snowball-marge-simpson-homer-simpson-santa-claus-thumbnail.png',
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