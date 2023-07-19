import style from './selectNames.module.css'

import { useDispatch } from 'react-redux'
import {
	filterCountriesByName,
	setOrder,
	filterCountriesByPopulation,
} from '../../../redux/actions/actions'

const SelectNamesAndPopulation = () => {
	const dispatch = useDispatch()

	const handleFilterName = event => {
		const { value } = event.target

		dispatch(filterCountriesByName(value))

		dispatch(setOrder(`Ordenado ${value}`))
	}

	const handleFilterPopulation = event => {
		const { value } = event.target

		dispatch(filterCountriesByPopulation(value))

		dispatch(setOrder(`Ordenado ${value}`))
	}

	return (
		<div className={style.selectNames}>
			<select
				onChange={event => {
					if (
						event.target.value === 'population_asc' ||
						event.target.value === 'population_desc'
					) {
						handleFilterPopulation(event)
					} else {
						handleFilterName(event)
					}
				}}
				defaultValue='default'
			>
				<option className={style.defaultOption} value='default' disabled>
					Ordenar
				</option>
				<option disabled value='name'>
					----Por nombre----
				</option>
				<option value='asc'>A-Z</option>
				<option value='desc'>Z-A</option>
				<option value='population' disabled>
					----Por población----
				</option>
				<option value='population_asc'>Ascendente (Población)</option>
				<option value='population_desc'>Descendente (Población)</option>
			</select>
		</div>
	)
}

export default SelectNamesAndPopulation
