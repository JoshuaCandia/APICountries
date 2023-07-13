import {
	GET_COUNTRIES,
	FILTER_COUNTRIES_BY_CONTINENT,
	FILTER_ACTIVITIES,
	FILTER_COUNTRIES_BY_NAME,
	SET_ORDER,
	FILTER_COUNTRIES_BY_SEARCH,
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

export {
	getCountries,
	filterCountriesByContinent,
	filterActivities,
	filterCountriesByName,
	filterCountriesBySearch,
	filterCountriesByPopulation,
	setOrder,
}
