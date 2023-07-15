import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createActivities } from '../../../redux/actions/actions'
import { validate } from './validations'
export const useActivityForm = () => {
	const dispatch = useDispatch()
	// State para siguiente input
	const [next, setNext] = useState(1)

	// Estado local para almacenar los valores del formulario
	const [activity, setActivity] = useState({
		name: '',
		difficulty: 0,
		duration: 0,
		season: 'default',
		countryIds: [],
	})

	// State de errores
	const [errors, setErrors] = useState({
		name: '',
		difficulty: '',
		duration: '',
		season: '',
		countryIds: '',
	})

	// Función para enviar la actividad al servidor
	const submitActivity = event => {
		event.preventDefault()
		dispatch(createActivities(activity))
		setActivity({
			name: '',
			difficulty: 3,
			duration: 0,
			season: 'default',
			countryIds: [],
		})
	}
	// Manejador de cambio para el campo de nombre
	const handleChangeName = event => {
		setErrors(validate(activity, next))
		setActivity({ ...activity, name: event.target.value })
	}

	const handleSubmitName = () => {
		setErrors(validate(activity, next))
		if (errors.name === '' && activity.name !== '') {
			setNext(2)
		}
	}

	const handleChangeDifficulty = event => {
		setErrors(validate(activity, next))
		setActivity({ ...activity, difficulty: event.target.value })
	}

	const handleSubmitDifficulty = () => {
		setErrors(validate(activity, next))
		if (errors.difficulty === '' && activity.difficulty !== 0) {
			setNext(3)
		}
	}
	const handleChangeDuration = event => {
		setErrors(validate(activity, next))
		setActivity({ ...activity, duration: event.target.value })
	}
	const handleSubmitDuration = () => {
		if (errors.duration === '' && activity.duration !== 0) {
			setNext(4)
		}
	}
	// Manejador de cambio para el campo de temporada
	const handleChangeSeason = event => {
		const selectedSeasons = event.target.value
		const updatedSeasons = [...activity.season, selectedSeasons]
		setActivity({ ...activity, season: updatedSeasons })
	}

	// Manejador de cambio para el campo de países asociados
	const handleSelectCountry = event => {
		const selectedCountryId = event.target.value
		const updatedCountryIds = [...activity.countryIds, selectedCountryId]
		setActivity({ ...activity, countryIds: updatedCountryIds })
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
		handleChangeSeason,
		handleSelectCountry,
		submitActivity,
		errors,
		setErrors,
		next,
	}
}

/* const currentActivity = activities.find(act => act.name === activity.name)

if (currentActivity)
	errors.name = 'An activity with the same name already exists' */
