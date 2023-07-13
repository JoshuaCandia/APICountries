import style from './create.module.css'

import Nav from '../../components/nav/Nav'
import { useActivityForm } from './modules/activityFunctions'

const Create = () => {
	// Obtener las funciones y los estados relacionados con el formulario de actividad
	const {
		activity,
		countries,
		handleChangeName,
		handleChangeDifficulty,
		handleChangeDuration,
		handleChangeSeason,
		handleSelectCountry,
		submitActivity,
	} = useActivityForm()

	return (
		<div className={style.create}>
			<Nav />

			<div className={style.form}>
				<form>
					{/* Input para el nombre */}
					<input
						type='text'
						placeholder='Name'
						value={activity.name}
						onChange={handleChangeName}
					/>

					{/* Input de rango para la dificultad */}
					<div className={style.inputDificulty}>
						<input
							type='range'
							min={1}
							max={5}
							placeholder='Difficulty'
							value={activity.difficulty}
							onChange={handleChangeDifficulty}
						/>
						{activity.difficulty ? (
							<p>Difficulty: {activity.difficulty}</p>
						) : null}
					</div>

					{/* Input para la duración */}
					<input
						type='number'
						placeholder='Duration'
						value={activity.duration}
						onChange={handleChangeDuration}
					/>

					{/* Select para la temporada */}
					<select
						name='SeasonSelect'
						defaultValue='default'
						onChange={handleChangeSeason}
					>
						<option value='default' disabled>
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
						<option value='default' disabled>
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
