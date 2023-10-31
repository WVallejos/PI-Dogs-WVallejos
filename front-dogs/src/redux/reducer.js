import { ADD_DOG, CHANGE_PAGE, CLEAR_DETAIL, FILTER_SORT, GET_DOGS, GET_DOG_ID, GET_DOG_NAME, GET_TEMPERAMENTS, RESET } from "./action-types";
import sortFunction from "./sortFunction";

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    dogDetail: {},
    filterByTemp: '',
    filterBySource: '',
    orderBy: '',
    order: 'ASC',
    currentPage: 1,
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DOGS:
            return { ...state, dogs: action.payload, allDogs: action.payload }

        case GET_DOG_NAME:
            return {
                ...state, dogs: action.payload, allDogs: action.payload, currentPage: 1, filterByTemp: '', filterBySource: '', orderBy: '', order: '',
            }
        
        case FILTER_SORT:
            const sortedDogs = sortFunction({...state, [action.payload.name]: action.payload.value})
            console.log(sortedDogs);
            return {
                ...state,
                currentPage: 1,
                [action.payload.name]: action.payload.value,
                dogs: sortedDogs
            }

        case GET_TEMPERAMENTS:
            return { ...state, temperaments: action.payload }

        case GET_DOG_ID:
            return {
                ...state, dogDetail: action.payload
            }

        case RESET:
            return {
                ...state,
                dogs: state.allDogs,
                dogDetail: {},
                dogCreated: {},
                filterByTemp: '',
                filterBySource: '',
                orderBy: '',
                order: '',
                currentPage: 1,
            }

        case ADD_DOG:
            state.allDogs.push(action.payload)
            if (state.filterBySource === 'database') {
                state.dogs.push(action.payload)
                return { ...state }
            }else {
            if (state.filterBySource === '' && state.filterByTemp !== '' && action.payload.temperament.includes(state.filterByTemp)) {
                state.dogs.push(action.payload)
                return { ...state }
            }}

        case CLEAR_DETAIL:
            return {
                ...state,
                dogDetail: {}
            }

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        default:
            return { ...state }

            // case FILTER_SOURCE:
                //     state.filterBySource = action.payload
                //     state.currentPage = 1
                //     if (state.filteredTemp.length > 0) {
        
                //         if (action.payload === 'api') {
                //             state.filteredSource = state.allDogs.filter((d) => !d.db)
                //             return { ...state, dogs: state.filteredTemp.filter((d) => !d.db) }
                //         } else if (action.payload === 'database') {
                //             state.filteredSource = state.allDogs.filter((d) => d.db)
                //             return { ...state, dogs: state.filteredTemp.filter((d) => d.db) }
                //         } else {
                //             return { ...state, dogs: [...state.filteredTemp], filteredSource: [] }
                //         }
                //     } else {
                //         if (action.payload === 'api') {
                //             state.filteredSource = state.allDogs.filter((d) => !d.db)
                //             return { ...state, dogs: state.filteredSource }
                //         } else if (action.payload === 'database') {
                //             state.filteredSource = state.allDogs.filter((d) => d.db)
                //             return { ...state, dogs: state.filteredSource }
                //         } else {
                //             return { ...state, dogs: [...state.allDogs], filteredSource: [] }
                //         }
        
                //     }

                 // case FILTER_TEMP:
        //     state.filteredTemp = state.allDogs.filter((d) => d.temperament && d.temperament.includes(action.payload))
        //     if (state.filteredSource.length > 0) {
        //         return { ...state, dogs: state.filteredSource.filter((d) => d.temperament && d.temperament.includes(action.payload)), currentPage: 1, filterByTemp: action.payload }
        //     } else {
        //         return { ...state, dogs: [...state.filteredTemp], currentPage: 1, filterByTemp: action.payload }
        //     }

          // case ORDER_WEIGHT:
        //     let orderWeightFunction =
        //         action.payload === 'ASC'
        //             ? (a, b) => { return parseFloat(a.weight.split('-')[0]) > parseFloat(b.weight.split('-')[0]) ? 1 : -1 } //ASC
        //             : (a, b) => { return parseFloat(a.weight.split('-')[0]) < parseFloat(b.weight.split('-')[0]) ? 1 : -1 } //DESC
        //     return {
        //         ...state,
        //         dogs: [...state.dogs.sort(orderWeightFunction)],
        //         allDogs: [...state.allDogs.sort(orderWeightFunction)],
        //         filteredTemp: [...state.filteredTemp?.sort(orderWeightFunction)],
        //         filteredSource: [...state.filteredSource?.sort(orderWeightFunction)],
        //         orderBy: 'weight',
        //         showOrder: true,
        //         order: action.payload
        //     }

           // case ORDER_NAME:
        //     console.log(state);
        //     let orderNameFunction =
        //         action.payload === 'ASC'
        //             ? (a, b) => { return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 } //ASC
        //             : (a, b) => { return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1 } //DESC
        //     return {
        //         ...state,
        //         dogs: [...state.dogs.sort(orderNameFunction)],
        //         allDogs: [...state.allDogs.sort(orderNameFunction)],
        //         filteredTemp: [...state.filteredTemp?.sort(orderNameFunction)],
        //         filteredSource: [...state.filteredSource?.sort(orderNameFunction)],
        //         orderBy: 'name',
        //         showOrder: true,
        //         order: action.payload
        //     }
    }
}

export default rootReducer

