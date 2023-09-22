import { ADD_DOG, FILTER_SOURCE, FILTER_TEMP, GET_DOGS, GET_DOGSAPI, GET_DOGSDB, GET_DOG_ID, GET_DOG_NAME, GET_TEMPERAMENTS, ORDER_NAME, ORDER_WEIGHT, RESET } from "./action-types";

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    filteredSource: [],
    dogDetail: {},
    filteredTemp: [],
    filterByTemp: '',
    filterBySource: '',
    orderBy: '',
    order: '',
    showOrder: false,
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DOGS:
                return { ...state, dogs: action.payload, allDogs: action.payload}
    
        case FILTER_SOURCE:
            state.filterBySource = action.payload
            if (state.filteredTemp.length > 0) {
                
                if (action.payload === 'api'){
                    state.filteredSource = state.allDogs.filter((d) => !d.db)
                    return { ...state, dogs: state.filteredTemp.filter((d) => !d.db)}
                } else if (action.payload === 'database') {
                    state.filteredSource = state.allDogs.filter((d) => d.db)
                    return { ...state, dogs: state.filteredTemp.filter((d) => d.db)}
                }   else {
                    return {...state, dogs: [...state.filteredTemp], filteredSource: []}
                }
            }  else {
                if (action.payload === 'api'){
                    state.filteredSource = state.allDogs.filter((d) => !d.db)
                    return { ...state, dogs: state.filteredSource}
                } else if (action.payload === 'database') {
                    state.filteredSource = state.allDogs.filter((d) => d.db)
                    return { ...state, dogs: state.filteredSource}
                }   else {
                    return {...state, dogs: [...state.allDogs], filteredSource: []}
                }

            }
        case GET_DOG_NAME:
            return { ...state, dogs: action.payload}
        
        case GET_TEMPERAMENTS:
            return { ...state, temperaments: action.payload}

        case FILTER_TEMP:
            state.filterByTemp = action.payload
            state.filteredTemp = state.allDogs.filter((d) => d.temperament && d.temperament.includes(action.payload))
            if (state.filteredSource.length > 0) {
                return { ...state, dogs: state.filteredSource.filter((d) => d.temperament && d.temperament.includes(action.payload))}
            } else {
                return { ...state, dogs: [...state.filteredTemp] }
            }
        case ORDER_NAME:
            state.orderBy = 'name'
            state.showOrder = true
            state.order = action.payload
            let orderNameFunction =
                action.payload === 'ASC'
                    ? (a, b) => { return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 } //ASC
                    : (a, b) => { return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1 } //DESC
            return {
                ...state,
                dogs: [...state.dogs.sort(orderNameFunction)]   
                }

        case ORDER_WEIGHT:
            state.orderBy = 'weight'
            state.showOrder = true
            state.order = action.payload
            let orderWeightFunction =
                action.payload === 'ASC'
                    ? (a, b) => { return parseFloat(a.weight.split('-')[0]) > parseFloat(b.weight.split('-')[0]) ? 1 : -1 } //ASC
                    : (a, b) => { return parseFloat(a.weight.split('-')[0]) < parseFloat(b.weight.split('-')[0]) ? 1 : -1 } //DESC
            return {
                ...state,
                dogs: [...state.dogs.sort(orderWeightFunction)]   
                }

        case GET_DOG_ID:
            return {
                ...state, dogDetail: action.payload
            }
        
        case RESET:
            return {
                dogs: [],
                allDogs: [],
                temperaments: [],
                filteredSource: [],
                dogDetail: {},
                filteredTemp: [],
                filterByTemp: '',
                filterBySource: '',
                orderBy: '',
                order: '',
                showOrder: false,
            }

        case ADD_DOG:
            return {...state}
    
        default:
            return {...state}
    }
}

export default rootReducer

