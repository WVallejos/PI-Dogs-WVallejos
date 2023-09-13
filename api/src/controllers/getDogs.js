const { getFromAPI } = require('./getFromAPI')
const { getFromDB } = require('./getFromDB')

const getDogs = async () => {
    try {
        const apiDogs = await getFromAPI();
        const dbDogs = await getFromDB();
        return apiDogs.concat(dbDogs);
    } catch (error) {
        throw error;
    }
}

module.exports = { getDogs }