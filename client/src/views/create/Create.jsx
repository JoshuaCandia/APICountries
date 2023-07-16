import style from './create.module.css'
import Nav from '../../components/nav/Nav'
import { Link } from 'react-router-dom'
import { useActivityForm } from './modules/activityFunctions'

const Create = () => {
	// Obtener las funciones y los estados relacionados con el formulario de actividad
	const {
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
	} = useActivityForm()

	const { difficulty, duration, name } = activity

	return (
		<div className={style.create}>
			<Nav />

			<div className={style.form}>
				<form>
					{next === 0 && (
						<div className={style.titleDiv}>
							<h2>Create your activity!</h2>
							<button type='button' onClick={() => setNext(1)}>
								Start
							</button>
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
								Send
							</button>
							{errors.name && <p className={style.error}>{errors.name}</p>}
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
								Send
							</button>
							{errors.difficulty && (
								<p className={style.error}>{errors.difficulty}</p>
							)}
							{activity.difficulty ? (
								<p>Difficulty: {activity.difficulty}</p>
							) : null}
						</div>
					)}

					{/* Input para la duración */}
					{next === 3 && (
						<div className='inputDuration'>
							<input
								type='number'
								placeholder='Duration'
								value={duration}
								name='duration'
								onChange={handleChangeDuration}
							/>
							<button type='button' onClick={() => handleSubmitDuration()}>
								Send
							</button>
							{errors.duration ? (
								<p className={style.error}>{errors.duration}</p>
							) : null}
						</div>
					)}

					{/* Select para la temporada */}
					{next === 4 && (
						<div>
							<select
								name='SeasonSelect'
								defaultValue='default'
								onChange={handleSelectSeason}
							>
								<option className={style.defaultValue} value='default' disabled>
									Select Season
								</option>
								<option value='Spring'>Spring</option>
								<option value='Summer'>Summer</option>
								<option value='Autumn'>Autumn</option>
								<option value='Winter'>Winter</option>
							</select>
							<button type='button' onClick={() => handleSubmitSeason()}>
								Send
							</button>
							{errors.season && <p className={style.error}>{errors.season}</p>}
						</div>
					)}
					{/* Select para los países asociados */}
					{next === 5 && (
						<div>
							<select
								onChange={handleSelectCountry}
								name='paises'
								id=''
								defaultValue='default'
							>
								<option className={style.defaultValue} value='default' disabled>
									Paises Asociados
								</option>
								{countries.map(country => (
									<option key={country.id} value={country.id}>
										{country.commonName}
									</option>
								))}
							</select>
							<button type='button' onClick={() => handleSubmitCountries()}>
								Send
							</button>
							{errors.countryIds && (
								<p className={style.error}>{errors.countryIds}</p>
							)}
						</div>
					)}
					{/* Botón para crear la actividad */}
					{next === 6 && (
						<button onClick={submitActivity} type='submit'>
							Crear
						</button>
					)}
					{/* Botón para volver al inicio o crear otra actividad */}
					{next === 7 && (
						<div>
							<Link to='/home'>
								<button>Volver al inicio</button>
							</Link>
							<button onClick={() => setNext(0)}>Crear otra actividad</button>
						</div>
					)}
				</form>
			</div>
		</div>
	)
}

export default Create
