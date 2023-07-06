import { GET_COUNTRIES, SET_CURRENT_PAGE } from '../action-types/action-types'

const initialState = {
	countries: [],
	activities: [],
	currentPage: 1,
	countriesPerPage: 10,
}

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries: payload,
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
