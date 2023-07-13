import style from './selectNames.module.css'

import { useDispatch } from 'react-redux'
import { filterCountriesByName, setOrder } from '../../../redux/actions/actions'

const SelectNames = () => {
	const dispatch = useDispatch()

	const handleFilterName = event => {
		const { value } = event.target

		dispatch(filterCountriesByName(value))

		dispatch(setOrder(`Ordenado ${value}`))
	}

	return (
		<div className={style.selectNames}>
			<select
				onChange={event => handleFilterName(event)}
				name='nombres'
				id='selectNombres'
				defaultValue='default'
			>
				<option className={style.defaultOption} value='default' disabled>
					Nombre
				</option>
				<option value='asc'>A-Z</option>
				<option value='desc'>Z-A</option>
			</select>
		</div>
	)
}

export default SelectNames
