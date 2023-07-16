import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createActivities } from '../../../redux/actions/actions'

import { useValidations } from './useValidations'

export const useActivityForm = () => {
	const dispatch = useDispatch()
	// State para siguiente input
	const [next, setNext] = useState(0)
	const { errors, validations } = useValidations(next)
	// Estado local para almacenar los valores del formulario
	const [activity, setActivity] = useState({
		name: '',
		difficulty: 0,
		duration: 0,
		season: [],
		countryIds: [],
	})

	// State de errores

	// Función para enviar la actividad al servidor
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
	// Manejador de cambio para el campo de nombre
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
	// Manejador de cambio para el campo de temporada
	const handleSelectSeason = event => {
		validations(event.target.value)
		const selectedSeasons = event.target.value
		if (activity.season.includes(selectedSeasons)) {
			validations('Season Repetida')
		} else {
			const updatedSeasons = [...activity.season, selectedSeasons]
			setActivity({ ...activity, season: updatedSeasons })
		}
	}

	const handleSubmitSeason = () => {
		validations(activity.season)
		if (errors.season === '' && activity.season.length !== 0) {
			setNext(5)
		}
	}

	// Manejador de cambio para el campo de países asociados
	const handleSelectCountry = event => {
		validations(event.target.value)
		const selectedCountryId = event.target.value
		if (activity.countryIds.includes(selectedCountryId)) {
			validations('Country Repetido')
		} else {
			const updatedCountryIds = [...activity.countryIds, selectedCountryId]
			setActivity({ ...activity, countryIds: updatedCountryIds })
		}
	}

	const handleSubmitCountries = () => {
		if (errors.countryIds === '' && activity.countryIds !== []) {
			setNext(6)
		}
	}

	// Estado global con todos los paises
	const countries = useSelector(state => state.countriesCopy)

	// Devolver los estados y los manejadores de cambio
	return {
		activity,
		countries,
		handleChangeName,
		handleSubmitName,
		handleChangeDifficulty,
		handleSubmitDifficulty,
		handleChangeDuration,
		handleSubmitDuration,
		handleSelectSeason,
		handleSubmitSeason,
		handleSelectCountry,
		handleSubmitCountries,
		submitActivity,
		errors,
		next,
		setNext,
	}
}

/* const currentActivity = activities.find(act => act.name === activity.name)

if (currentActivity)
	errors.name = 'An activity with the same name already exists' */
