import {
	// Traer Todos los paises
	GET_COUNTRIES,
	// Crear Actividades
	CREATE_ACTIVITIES,
	// Filtrar paises
	FILTER_COUNTRIES_BY_CONTINENT,
	FILTER_ACTIVITIES,
	FILTER_COUNTRIES_BY_SEARCH,
	// Ordenar Paises
	SET_ORDER,
	FILTER_COUNTRIES_BY_NAME,
	FILTER_COUNTRIES_BY_POPULATION,
} from '../action-types/action-types'

import axios from 'axios'

const getCountries = () => {
	return async dispatch => {
		const { data } = await axios.get('http://localhost:3001/countries')
		dispatch({
			type: GET_COUNTRIES,
			payload: data,
		})
	}
}

const filterCountriesByContinent = payload => {
	return dispatch => {
		dispatch({
			type: FILTER_COUNTRIES_BY_CONTINENT,
			payload,
		})
	}
}

const filterActivities = payload => {
	console.log(payload)
	return dispatch => {
		dispatch({
			type: FILTER_ACTIVITIES,
			payload,
		})
	}
}

const filterCountriesByName = payload => {
	return dispatch => {
		dispatch({
			type: FILTER_COUNTRIES_BY_NAME,
			payload,
		})
	}
}

const filterCountriesByPopulation = payload => {
	return dispatch => {
		dispatch({
			type: FILTER_COUNTRIES_BY_POPULATION,
			payload,
		})
	}
}

const filterCountriesBySearch = name => {
	return async dispatch => {
		const { data } = await axios(
			`http://localhost:3001/countries/name?name=${name}`
		)
		dispatch({
			type: FILTER_COUNTRIES_BY_SEARCH,
			payload: data,
		})
	}
}

const setOrder = order => {
	return dispatch => {
		dispatch({
			type: SET_ORDER,
			payload: order,
		})
	}
}

const createActivities = activity => {
	return async dispatch => {
		try {
			const { data } = await axios.post(
				'http://localhost:3001/activities',
				activity
			)
			alert('Actividad Creada')

			dispatch({
				type: CREATE_ACTIVITIES,
				payload: activity,
			})
			return { success: true, data }
		} catch (error) {
			console.error('Error creating activities:', error)
			return { success: false, error: error.message }
		}
	}
}

export {
	getCountries,
	createActivities,
	filterCountriesByContinent,
	filterActivities,
	filterCountriesByName,
	filterCountriesBySearch,
	filterCountriesByPopulation,
	setOrder,
}
