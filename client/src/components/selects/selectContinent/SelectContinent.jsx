import style from './selectContinent.module.css'

const SelectContinent = () => {
	return (
		<div className={style.selectContinent}>
			<select name='continent' id='selectContinent' defaultValue='default'>
				<option value='default' disabled>
					Continente
				</option>
				<option value='America'>América</option>
				<option value='Africa'>África</option>
				<option value='Asia'>Asia</option>
				<option value='Europa'>Europa</option>
				<option value='Oceania'>Oceanía</option>
				<option value='Todos'>Todos</option>
			</select>
		</div>
	)
}

export default SelectContinent
