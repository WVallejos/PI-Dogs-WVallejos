export default function sortFunction({
    allDogs,
    filterByTemp,
    filterBySource,
    orderBy,
    order
}) {
    // Filter by temperament
    let filteredDogs = filterByTemp === '' ? allDogs : allDogs.filter((d) => d.temperament && d.temperament.includes(filterByTemp))

    // Filter by orders
    if (filterBySource === 'api') filteredDogs = filteredDogs.filter((d) => !d.db)
    if (filterBySource === 'database') filteredDogs = filteredDogs.filter((d) => d.db)

    // Order functions

    let orderWeightFunction =
        order === 'ASC'
            ? (a, b) => { return parseFloat(a.weight.split('-')[0]) > parseFloat(b.weight.split('-')[0]) ? 1 : -1 } //ASC
            : (a, b) => { return parseFloat(a.weight.split('-')[0]) < parseFloat(b.weight.split('-')[0]) ? 1 : -1 } //DESC

    let orderNameFunction =
        order === 'ASC'
            ? (a, b) => { return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 } //ASC
            : (a, b) => { return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1 } //DESC

    // Order

    if (orderBy === 'weight') filteredDogs = filteredDogs.slice(0).sort(orderWeightFunction)
    if (orderBy === 'name') filteredDogs = filteredDogs.slice(0).sort(orderNameFunction)
   
    return filteredDogs
}





