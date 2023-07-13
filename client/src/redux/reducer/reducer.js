/* eslint-disable no-case-declarations */
import {
	GET_COUNTRIES,
	// FILTER_ACTIVITIES,
	FILTER_COUNTRIES_BY_CONTINENT,
	FILTER_COUNTRIES_BY_SEARCH,
	SET_ORDER,
	// Or
	FILTER_COUNTRIES_BY_NAME,
	FILTER_COUNTRIES_BY_POPULATION,
} from '../action-types/action-types'

const initialState = {
	countries: [],
	countriesCopy: [],
	activities: [],
	order: '',
}

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries: payload,
				countriesCopy: payload,
			}
		case FILTER_COUNTRIES_BY_CONTINENT:
			const statusFiltered =
				payload === 'Todos'
					? state.countriesCopy
					: state.countriesCopy.filter(country => country.continent === payload)

			return {
				...state,
				countries: statusFiltered,
			}

		case FILTER_COUNTRIES_BY_NAME:
			const sortedArray =
				payload === 'asc'
					? state.countries.sort(function (a, b) {
							if (a.commonName > b.commonName) return 1
							if (b.commonName > a.commonName) return -1
							return 0
					  })
					: state.countries.sort(function (a, b) {
							if (a.commonName > b.commonName) return -1
							if (b.commonName > a.commonName) return 1
							return 0
					  })
			return {
				...state,
				countries: sortedArray,
			}

		case FILTER_COUNTRIES_BY_POPULATION:
			const sortedArrayPopulation =
				payload === 'asc'
					? state.countries.sort(function (a, b) {
							if (a.population > b.population) return -1
							if (b.population > a.population) return 1
							return 0
					  })
					: state.countries.sort(function (a, b) {
							if (a.population > b.population) return 1
							if (b.population > a.population) return -1
							return 0
					  })
			return {
				...state,
				countries: sortedArrayPopulation,
			}

		case FILTER_COUNTRIES_BY_SEARCH:
			state.countriesCopy = payload
			return {
				...state,

				countries: state.countriesCopy,
			}

		case SET_ORDER:
			return {
				...state,
				order: payload,
			}
		default:
			return state
	}
}

export default reducer
