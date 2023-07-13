import style from './selectPopulation.module.css'

import { useDispatch } from 'react-redux'
import {
	filterCountriesByPopulation,
	setOrder,
} from '../../../redux/actions/actions'

const SelectPopulation = () => {
	const dispatch = useDispatch()
	const handleFilterPopulation = event => {
		const { value } = event.target

		dispatch(filterCountriesByPopulation(value))

		dispatch(setOrder(`Ordenado ${value}`))
	}

	return (
		<div className={style.selectPopulation}>
			<select
				defaultValue='Población'
				onChange={event => handleFilterPopulation(event)}
			>
				<option className={style.defaultOption} value='Población' disabled>
					Población
				</option>
				<option value='asc'>Ascendente</option>
				<option value='desc'>Descendente</option>
			</select>
		</div>
	)
}

export default SelectPopulation
