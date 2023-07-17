import { useState } from 'react'

export const useValidations = next => {
	const [errors, setErrors] = useState({
		name: '',
		difficulty: '',
		duration: '',
		season: '',
		countryIds: '',
	})

	const validations = value => {
		const newErrors = { ...errors }

		switch (next) {
			case 1: {
				const regex = /^[a-zA-Z0-9\s]{4,15}$/
				if (!value) {
					newErrors.name = 'No puede enviar un nombre vacío'
				} else if (!regex.test(value)) {
					newErrors.name =
						'El nombre solo puede contener letras, números y espacios, y debe tener entre 4 y 15 caracteres'
				} else {
					newErrors.name = ''
				}
				break
			}
			case 2: {
				const regex = /^[1-5]$/
				if (!value) {
					newErrors.difficulty = 'A difficulty number is required'
				} else if (!regex.test(value)) {
					newErrors.difficulty = 'La dificultad debe ser un número entre 1 y 5'
				} else {
					newErrors.difficulty = ''
				}
				break
			}
			case 3: {
				const regex = /^\d{1,3}$/
				if (value === 0 || Number(value) < 1) {
					newErrors.duration = 'La duracion debe ser mayor a 0'
				} else if (!regex.test(value)) {
					newErrors.duration =
						'La duración debe ser un número de hasta 3 dígitos'
				} else {
					newErrors.duration = ''
				}
				break
			}
			case 4:
				if (!value.length) {
					newErrors.season = 'Please select a season'
				} else if (value === 'Season Repetida') {
					newErrors.season = 'Porfavor elija una temporada diferente'
				} else {
					newErrors.season = ''
				}

				break
			case 5:
				if (value.length === 0) {
					newErrors.countryIds = 'Please select at least one country'
				} else if (value === 'Country Repetid') {
					newErrors.countryIds = 'Porfavor elija un país diferente'
				} else {
					newErrors.countryIds = ''
				}
				break
			default:
				break
		}

		setErrors(newErrors)
	}

	return { errors, validations }
}
