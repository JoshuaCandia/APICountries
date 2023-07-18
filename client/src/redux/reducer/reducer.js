/* eslint-disable no-case-declarations */
import {
	// Traer Paises
	GET_COUNTRIES,
	// Crear Actividades
	CREATE_ACTIVITIES,
	// Filtrar paises
	FILTER_ACTIVITIES,
	FILTER_COUNTRIES_BY_CONTINENT,
	FILTER_COUNTRIES_BY_SEARCH,
	SET_ORDER,
	// Ordenar Paises
	FILTER_COUNTRIES_BY_NAME,
	FILTER_COUNTRIES_BY_POPULATION,
} from '../action-types/action-types'

const initialState = {
	countries: [],
	countriesCopy: [],
	countriesPerContinent: [],
	countriesSet: false,
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

		// Filtrado
		case FILTER_COUNTRIES_BY_CONTINENT:
			const statusFiltered =
				payload === 'Todos'
					? state.countriesCopy
					: state.countriesCopy.filter(country => country.continent === payload)

			return {
				...state,
				countries: statusFiltered,
				countriesPerContinent: statusFiltered,
				countriesSet: true,
			}

		case FILTER_COUNTRIES_BY_SEARCH:
			state.countriesCopy = payload
			return {
				...state,

				countries: state.countriesCopy,
			}

		case FILTER_ACTIVITIES:
			let activitiesFiltered = []
			if (state.countriesSet === true) {
				if (payload === 'created') {
					activitiesFiltered = state.countriesPerContinent.filter(
						country => country.Activities.length !== 0
					)
				} else if (payload === 'nonCreated') {
					activitiesFiltered = state.countriesPerContinent.filter(
						country => country.Activities.length === 0
					)
				}
			} else {
				if (payload === 'created') {
					activitiesFiltered = state.countriesCopy.filter(
						country => country.Activities.length !== 0
					)
				} else if (payload === 'nonCreated') {
					activitiesFiltered = state.countriesCopy.filter(
						country => country.Activities.length === 0
					)
				}
			}

			return {
				...state,
				countries: activitiesFiltered,
			}
		// Ordenamiento

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
				payload === 'population_asc'
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

		case SET_ORDER:
			return {
				...state,
				order: payload,
			}
		case CREATE_ACTIVITIES:
			const found = state.activities.find(act => act.name === payload.name)
			if (found) return { ...state }
			return {
				...state,
				activities: [...state.activities, payload],
			}
		default:
			return state
	}
}

export default reducer
