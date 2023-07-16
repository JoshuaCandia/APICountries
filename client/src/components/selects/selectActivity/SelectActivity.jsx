import style from './selectActivity.module.css'

import { useDispatch } from 'react-redux'
import { filterActivities } from '../../../redux/actions/actions'

const SelectActivity = ({ setCurrentPage, setInputPage }) => {
	const dispatch = useDispatch()

	const handleFilterActivities = event => {
		dispatch(filterActivities(event.target.value))
		setCurrentPage(1)
		setInputPage(1)
	}

	return (
		<div className={style.selectActivity}>
			<select
				onChange={handleFilterActivities}
				name='actividad'
				id='selectActividad'
				defaultValue='default'
			>
				<option className={style.defaultOption} value='default' disabled>
					Actividad
				</option>
				<option value='created'>Con Actividades</option>
				<option value='nonCreated'>Sin Actividades</option>
			</select>
		</div>
	)
}

export default SelectActivity
