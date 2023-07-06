/* eslint-disable no-case-declarations */
import {
	FILTER_COUNTRIES_BY_CONTINENT,
	GET_COUNTRIES,
	SET_CURRENT_PAGE,
} from '../action-types/action-types'

const initialState = {
	countries: [],
	countriesCopy: [],
	activities: [],
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
			const countriesCopy = state.countriesCopy
			const statusFiltered =
				payload === 'Todos'
					? countriesCopy
					: countriesCopy.filter(country => country.continent === payload)

			return {
				...state,
				countries: statusFiltered,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: payload,
			}
		default:
			return state
	}
}

export default reducer
