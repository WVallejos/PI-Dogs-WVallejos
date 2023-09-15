import { FILTER_TEMP, GET_DOGS, GET_DOGSAPI, GET_DOGSDB, GET_TEMPERAMENTS, RESET } from "./action-types";
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
export function getDogsDB() {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/dogsdb`)
            return dispatch({
                type: GET_DOGSDB,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}
export function getDogsApi() {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/dogsapi`)
            return dispatch({
                type: GET_DOGSAPI,
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
                type: GET_DOGSDB,
                payload: data
            })
        } catch (error) {
            alert(error.message)
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
export function filterTemperaments(temp) {
    return {
        type: FILTER_TEMP,
        payload: temp
    }
}

export function reset() {
    return {
        type: RESET,
    }
}