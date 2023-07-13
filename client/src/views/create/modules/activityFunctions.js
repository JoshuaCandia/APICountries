import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

export const useActivityForm = () => {
	// Estado local para almacenar los valores del formulario
	const [activity, setActivity] = useState({
		name: '',
		difficulty: '',
		duration: 0,
		season: '',
		countryIds: [],
	})

	// eslint-disable-next-line no-unused-vars
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
		axios.post('http://localhost:3001/activities', activity)
	}

	// Manejador de cambio para el campo de nombre
	const handleChangeName = event => {
		setActivity({ ...activity, name: event.target.value })
	}

	// Manejador de cambio para el campo de dificultad
	const handleChangeDifficulty = event => {
		setActivity({ ...activity, difficulty: event.target.value })
	}

	// Manejador de cambio para el campo de duración
	const handleChangeDuration = event => {
		setActivity({ ...activity, duration: event.target.value })
	}

	// Manejador de cambio para el campo de temporada
	const handleChangeSeason = event => {
		setActivity({ ...activity, season: event.target.value })
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
		handleChangeDifficulty,
		handleChangeDuration,
		handleChangeSeason,
		handleSelectCountry,
		submitActivity,
	}
}
