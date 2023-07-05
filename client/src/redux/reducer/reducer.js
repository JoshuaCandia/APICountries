import { GET_COUNTRIES } from '../action-types/action-types'

const initialState = {
	countries: [],
	activities: [],
	currentPage: 1,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries: action.payload,
			}
		default:
			return state
	}
}

export default reducer
