export const validate = (input, next) => {
	const errors = {
		name: '',
		difficulty: '',
		duration: '',
		season: '',
		countryIds: '',
	}

	if (!input.name) {
		errors.name = 'A name is required for the activity'
	}

	if (next === 2 && input.difficulty === 0) {
		errors.difficulty = 'A difficulty number is required'
	}

	if (next === 3 && !input.duration) {
		errors.duration = 'A duration is required'
	}

	if (next === 4 && !input.season) {
		errors.season = 'Please select a season'
	}

	return errors
}
