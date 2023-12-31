import style from './selectContinent.module.css'

// Import Hooks
import { useDispatch } from 'react-redux'
import { filterCountriesByContinent } from '../../../redux/actions/actions'

const SelectContinent = ({ setCurrentPage, setInputPage }) => {
	const dispatch = useDispatch()

	const handleFilterContinent = event => {
		dispatch(filterCountriesByContinent(event.target.value))
		setCurrentPage(1)
		setInputPage(1)
	}

	return (
		<div className={style.selectContinent}>
			<select
				onChange={event => handleFilterContinent(event)}
				name='continent'
				id='selectContinent'
				defaultValue='default'
			>
				<option className={style.defaultOption} value='default' disabled>
					Continente
				</option>
				<option value='South America'>Sudamérica</option>
				<option value='North America'>Norteamérica</option>
				<option value='Africa'>África</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europa</option>
				<option value='Oceania'>Oceanía</option>
				<option value='Antarctica'>Antártida</option>
				<option value='Todos'>Todos</option>
			</select>
		</div>
	)
}

export default SelectContinent
