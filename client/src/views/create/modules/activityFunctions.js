import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createActivities } from '../../../redux/actions/actions'

import { useValidations } from './useValidations'

export const useActivityForm = () => {
	const dispatch = useDispatch()

	const [next, setNext] = useState(0)
	const { errors, validations } = useValidations(next)
	const [selectedSeason, setSelectedSeason] = useState('default')
	const [selectedCountryIds, setSelectedCountryIds] = useState([])
	const [disabledSeasons, setDisabledSeasons] = useState([])
	const [countries, setCountries] = useState([])

	const [activity, setActivity] = useState({
		name: '',
		difficulty: 0,
		duration: 0,
		season: [],
		countryIds: [],
	})

	const submitActivity = event => {
		event.preventDefault()
		dispatch(createActivities(activity))
		setActivity({
			name: '',
			difficulty: 0,
			duration: 0,
			season: [],
			countryIds: [],
		})
		setNext(7)
	}

	// Name Handlers

	const handleChangeName = event => {
		validations(event.target.value)
		setActivity({ ...activity, name: event.target.value })
	}

	const handleSubmitName = () => {
		validations(activity.name)
		if (errors.name === '' && activity.name !== '') {
			setNext(2)
		}
	}

	// Difficulty Handlers

	const handleChangeDifficulty = event => {
		validations(event.target.value)
		setActivity({ ...activity, difficulty: event.target.value })
	}

	const handleSubmitDifficulty = () => {
		validations(activity.difficulty)
		if (errors.difficulty === '' && activity.difficulty !== 0) {
			setNext(3)
		}
	}

	// Duration Handlers

	const handleChangeDuration = event => {
		validations(event.target.value)
		setActivity({ ...activity, duration: event.target.value })
	}

	const handleSubmitDuration = () => {
		validations(activity.duration)
		if (errors.duration === '' && activity.duration !== 0) {
			setNext(4)
		}
	}

	// Seasons Handlers

	const seasons = ['Spring', 'Summer', 'Autumn', 'Winter']

	const handleSelectSeason = event => {
		const selectedSeasons = event.target.value
		validations(selectedSeasons)
		setSelectedSeason(selectedSeasons)

		if (activity.season.includes(selectedSeasons)) {
			validations('Season Repetida')
		} else {
			const updatedSeasons = [...activity.season, selectedSeasons]
			setActivity({ ...activity, season: updatedSeasons })
			setDisabledSeasons(prevDisabledSeasons =>
				prevDisabledSeasons.includes(selectedSeasons)
					? prevDisabledSeasons
					: [...prevDisabledSeasons, selectedSeasons]
			)
		}
	}

	const handleSubmitSeason = () => {
		validations(activity.season)
		if (errors.season === '' && activity.season.length !== 0) {
			setNext(5)
		}
	}

	const removeSeasons = event => {
		const updatedSeasons = activity.season.filter(season => season !== event)
		setActivity(prevActivity => ({
			...prevActivity,
			season: updatedSeasons,
		}))
		setDisabledSeasons(prevDisabledSeasons =>
			prevDisabledSeasons.filter(season => season !== event)
		)
	}

	// Countries Handlers
	const handleSelectCountry = event => {
		validations(event.target.value)
		const selectedCountryId = event.target.value

		if (activity.countryIds.includes(selectedCountryId)) {
			validations('Country Repetido')
		} else {
			const updatedCountryIds = [...activity.countryIds, selectedCountryId]
			setActivity({ ...activity, countryIds: updatedCountryIds })
			setSelectedCountryIds(prevSelectedCountryIds => [
				...prevSelectedCountryIds,
				selectedCountryId,
			])
		}
	}

	const removeCountries = countryId => {
		const updatedCountryIds = activity.countryIds.filter(id => id !== countryId)
		setActivity(prevActivity => ({
			...prevActivity,
			countryIds: updatedCountryIds,
		}))
		setSelectedCountryIds(prevSelectedCountryIds =>
			prevSelectedCountryIds.filter(id => id !== countryId)
		)
	}

	const handleSubmitCountries = () => {
		validations(activity.countryIds)
		if (errors.countryIds === '' && activity.countryIds.length !== 0) {
			setNext(6)
		}
	}

	const countriesNames = []

	activity.countryIds.forEach(countryId => {
		const countryName = countries.find(country => country.id === countryId)
		countriesNames.push(countryName)
	})

	return {
		activity,
		countries,
		setCountries,
		handleChangeName,
		handleSubmitName,
		handleChangeDifficulty,
		handleSubmitDifficulty,
		handleChangeDuration,
		handleSubmitDuration,
		handleSelectSeason,
		handleSubmitSeason,
		selectedSeason,
		disabledSeasons,
		seasons,
		removeSeasons,
		handleSelectCountry,
		handleSubmitCountries,
		selectedCountryIds,
		removeCountries,
		countriesNames,

		submitActivity,
		errors,
		next,
		setNext,
	}
}
