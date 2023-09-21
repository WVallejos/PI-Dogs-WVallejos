import { ADD_DOG, FILTER_SOURCE, FILTER_TEMP, GET_DOGS, GET_DOGSAPI, GET_DOGSDB, GET_DOG_ID, GET_DOG_NAME, GET_TEMPERAMENTS, ORDER_NAME, ORDER_WEIGHT, RESET } from "./action-types";
import axios from 'axios'

const URL_BASE = 'http://localhost:3001'

export function getAllDogs() {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/dogs`)
            return dispatch({
                type: GET_DOGS,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export function getDogName(name) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/dogs?name=${name}`)
            return dispatch({
                type: GET_DOG_NAME,
                payload: data
            })
        } catch (error) {
           console.log(error);
        }
    }
}

export function getTemperaments() {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/temperaments`)
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export function addDog(dog) {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL_BASE}/dogs`, dog)
            return dispatch({
                type: ADD_DOG,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export function getDogById(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/dogs/${id}`)
            return dispatch({
                type: GET_DOG_ID,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export function filterTemperaments(temp) {
    return {
        type: FILTER_TEMP,
        payload: temp
    }
}

export function filterSource(source) {
    return {
        type: FILTER_SOURCE,
        payload: source
    }
}

export function orderName(order) {
    return {
        type: ORDER_NAME,
        payload: order
    }
}

export function orderWeight(order) {
    return {
        type: ORDER_WEIGHT,
        payload: order
    }
}

export function reset() {
    return {
        type: RESET,
    }
}