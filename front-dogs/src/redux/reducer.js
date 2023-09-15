import { FILTER_TEMP, GET_DOGS, GET_DOGSAPI, GET_DOGSDB, GET_DOG_NAME, GET_TEMPERAMENTS, RESET } from "./action-types";

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: []
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DOGS:
                return { ...state, dogs: action.payload, allDogs: action.payload}
    
        case GET_DOGSDB:
                return { ...state, dogs: action.payload}
        
        case GET_DOGSAPI:
                return { ...state, dogs: action.payload}
        
        case GET_DOG_NAME:
            return { ...state, dogs: action.payload}
        
        case GET_TEMPERAMENTS:
            return { ...state, temperaments: action.payload}

        case FILTER_TEMP:
            console.log(action.payload);
            return { ...state, dogs: state.allDogs.filter((d) => d.temperament && d.temperament.includes(action.payload)) }

        case RESET:
            return { ...state, dogs: [...state.allDogs]}
    
        default:
            return {...state}
    }
}

export default rootReducer

// const dispatch = useDispatch()
//     const allDogs = useSelector((state) => state.allDogs)
//     const dogsDB = useSelector((state) => state.dogsDB)
//     const [dogs, setDogs] = useState([])

//     const handleDB = () => {
//         dispatch(getDogsDB)
//         console.log('entre a handledb');
//         setDogs((dogsDB)=>[...dogsDB])
//         console.log(dogs);

//     }
    
//     useEffect(() => {
//         dispatch(getAllDogs())
//         setDogs(allDogs)
//         console.log(allDogs);
//     }, [dispatch])