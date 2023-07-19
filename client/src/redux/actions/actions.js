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
	// Restaurar
	RESTORE,
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
			// eslint-disable-next-line no-unused-vars
			const { data } = await axios.post(
				'http://localhost:3001/activities',
				activity
			)
			alert('Actividad Creada')

			dispatch({
				type: CREATE_ACTIVITIES,
				payload: activity,
			})
		} catch (error) {
			console.error('Error creating activities:', error)
			return { error: error.message }
		}
	}
}

export const restore = () => {
	return async dispatch => {
		dispatch({
			type: RESTORE,
		})
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
