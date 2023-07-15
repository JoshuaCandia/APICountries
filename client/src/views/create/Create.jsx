import style from './create.module.css'
import Nav from '../../components/nav/Nav'

import { useActivityForm } from './modules/activityFunctions'

const Create = () => {
	// Obtener las funciones y los estados relacionados con el formulario de actividad
	const {
		activity,
		countries,
		errors,
		next,
		handleChangeName,
		handleSubmitName,
		handleChangeDifficulty,
		handleSubmitDifficulty,
		handleChangeDuration,
		handleSubmitDuration,
		handleChangeSeason,
		handleSelectCountry,
		submitActivity,
	} = useActivityForm()

	const { difficulty, duration, name } = activity

	return (
		<div className={style.create}>
			<Nav />

			<div className={style.form}>
				<form>
					{next === 1 && (
						<div className={style.inputName}>
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
						</div>
					)}

					{/* Select para la temporada */}
					<select
						name='SeasonSelect'
						defaultValue='default'
						onChange={handleChangeSeason}
					>
						<option className={style.defaultValue} value='default' disabled>
							Select Season
						</option>
						<option value='Spring'>Spring</option>
						<option value='Summer'>Summer</option>
						<option value='Autumn'>Autumn</option>
						<option value='Winter'>Winter</option>
					</select>

					{/* Select para los países asociados */}
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

					{/* Botón para crear la actividad */}
					<button onClick={submitActivity} type='submit'>
						Create
					</button>
				</form>
			</div>
		</div>
	)
}

export default Create
