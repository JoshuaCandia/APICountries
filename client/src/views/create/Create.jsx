import style from './create.module.css'
import Nav from '../../components/nav/Nav'
import { Link } from 'react-router-dom'
import { useActivityForm } from './modules/activityFunctions'
import { useEffect } from 'react'

import axios from 'axios'

const Create = () => {
	// Obtener las funciones y los estados relacionados con el formulario de actividad
	const {
		countries,
		setCountries,
		activity,
		handleChangeName,
		handleSubmitName,
		handleChangeDifficulty,
		handleSubmitDifficulty,
		handleChangeDuration,
		handleSubmitDuration,
		handleSelectSeason,
		handleSubmitSeason,
		seasons,
		selectedSeason,
		disabledSeasons,
		removeSeasons,
		handleSelectCountry,
		handleSubmitCountries,
		countriesNames,
		selectedCountryIds,
		removeCountries,
		submitActivity,
		errors,
		next,
		setNext,
		createAnother,
	} = useActivityForm()

	const { difficulty, duration, name } = activity

	useEffect(() => {
		const getCountries = async () => {
			const { data } = await axios.get('http://localhost:3001/countries')

			setCountries(data)
		}
		getCountries()
	}, [])

	return (
		<div className={style.create}>
			<Nav />

			<form className={style.form}>
				{next === 0 && (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100vw',
							height: '90vh',
						}}
					>
						<div className={style.titleDiv}>
							<h2>¡Crea tu Actividad!</h2>
							<button type='button' onClick={() => setNext(1)}>
								Crear
							</button>
						</div>
					</div>
				)}
				{next === 1 && (
					<div className={style.nameDiv}>
						<h3>Ingrese un nombre para la Actividad</h3>
						<input
							type='text'
							placeholder='Name'
							name='name'
							value={name}
							onChange={handleChangeName}
						/>

						<button type='button' onClick={() => handleSubmitName()}>
							Aplicar
						</button>
					</div>
				)}

				{/* Input de rango para la dificultad */}
				{next === 2 && (
					<div className={style.inputDificulty}>
						<h3>Ingrese una dificultad para la Actividad</h3>
						<input
							type='range'
							min={1}
							max={5}
							placeholder='Difficulty'
							value={difficulty}
							onChange={handleChangeDifficulty}
							name='difficulty'
						/>
						<button type='button' onClick={() => handleSubmitDifficulty()}>
							Aplicar
						</button>
					</div>
				)}

				{/* Input para la duración */}
				{next === 3 && (
					<div className={style.durationDiv}>
						<h3>Ingrese una duración para la Actividad</h3>
						<input
							type='number'
							min='0'
							placeholder='Duration'
							value={duration}
							name='duration'
							onChange={handleChangeDuration}
						/>
						<button type='button' onClick={() => handleSubmitDuration()}>
							Aplicar
						</button>
					</div>
				)}

				{/* Select para la temporada */}
				{next === 4 && (
					<div className={style.seasonDiv}>
						<h3>Seleccione la estación para la actividad</h3>
						<select
							name='SeasonSelect'
							value={selectedSeason}
							onChange={handleSelectSeason}
						>
							<option
								className={style.defaultValue}
								value={selectedSeason}
								disabled
							>
								Selecciona una estación
							</option>
							{seasons.map(season => (
								<option
									key={season}
									value={season}
									disabled={disabledSeasons.includes(season)}
								>
									{season}
								</option>
							))}
						</select>
						<div className={style.seasonSelectedDiv}>
							{activity.season &&
								activity.season.map(season => (
									<p
										className={style.seasonSelected}
										key={season}
										value={season}
									>
										{season}
										<button type='button' onClick={() => removeSeasons(season)}>
											x
										</button>
									</p>
								))}
						</div>
						<button
							className={style.buttonSeason}
							type='button'
							onClick={handleSubmitSeason}
						>
							Aplicar
						</button>
					</div>
				)}
				{/* Select para los países asociados */}
				{next === 5 && (
					<div className={style.countryDiv}>
						<h3>Seleccione los paises donde se realiza la Actividad</h3>
						<select
							onChange={handleSelectCountry}
							name='paises'
							id=''
							value={selectedCountryIds.join()}
						>
							<option
								className={style.defaultValue}
								value={selectedCountryIds.join()}
								disabled
							>
								Paises Asociados
							</option>
							{countries.map(country => (
								<option
									key={country.id}
									value={country.id}
									disabled={selectedCountryIds.includes(country.id)}
								>
									{country.commonName}
								</option>
							))}
						</select>

						<div className={style.countrySelectedDiv}>
							{countriesNames.map(countryName => (
								<p
									className={style.countrySelected}
									key={countryName.commonName}
									value={countryName.id}
								>
									{countryName.commonName}

									<button
										className={style.buttonCloseCountry}
										type='button'
										onClick={() => removeCountries(countryName.id)}
									>
										x
									</button>
								</p>
							))}
						</div>

						<button type='button' onClick={() => handleSubmitCountries()}>
							Send
						</button>
					</div>
				)}
				{/* Botón para crear la actividad */}
				{next === 6 && (
					<div className={style.createFinal}>
						<button onClick={submitActivity} type='submit'>
							Terminar
						</button>
					</div>
				)}

				{/* Botón para volver al inicio o crear otra actividad */}
				{next === 7 && (
					<div className={style.finalButtons}>
						<Link to='/home'>
							<button>Volver al inicio</button>
						</Link>
						<button onClick={() => createAnother()}>
							Crear otra actividad
						</button>
					</div>
				)}
				{next !== 0 && (
					<div className={style.cardActivity}>
						{next && (
							<>
								<h3>
									<label>Nombre :</label>
									{activity.name}
								</h3>
								{errors.name && <p className={style.error}>{errors.name}</p>}
							</>
						)}
						{next > 1 && (
							<>
								<h4>
									<label>Dificultad : </label>
									{activity.difficulty}
								</h4>
								{errors.difficulty && (
									<p className={style.error}>{errors.difficulty}</p>
								)}
							</>
						)}
						{next > 2 && (
							<>
								<h4>
									<label>Duracion :</label> {activity.duration} minutos
								</h4>
								{errors.duration ? (
									<p className={style.error}>{errors.duration}</p>
								) : null}
							</>
						)}

						{next > 3 && (
							<>
								<h4>
									<label>Temporada : </label>
									{activity.season.join(', ')}
								</h4>

								{errors.season && (
									<p className={style.error}>{errors.season}</p>
								)}
							</>
						)}
						{next > 4 && (
							<>
								<h4>
									<label>Paises :</label>
									{countriesNames
										.map(countryName => countryName.commonName)
										.join(', ')}
								</h4>
								{errors.countryIds && (
									<p className={style.error}>{errors.countryIds}</p>
								)}
							</>
						)}
					</div>
				)}
			</form>
		</div>
	)
}

export default Create
