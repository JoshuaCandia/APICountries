import {
	GET_COUNTRIES,
	FILTER_COUNTRIES_BY_CONTINENT,
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
export { getCountries, filterCountriesByContinent }
