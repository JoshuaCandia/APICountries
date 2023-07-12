import style from './selectActivity.module.css'

import { useDispatch } from 'react-redux'
import { filterActivities } from '../../../redux/actions/actions'

const SelectActivity = ({ setCurrentPage }) => {
	const dispatch = useDispatch()

	const handleFilterActivities = event => {
		dispatch(filterActivities(event.target.value))
		setCurrentPage(1)
	}

	return (
		<div className={style.selectActivity}>
			<select
				onChange={handleFilterActivities}
				name='actividad'
				id='selectActividad'
				defaultValue='default'
			>
				<option value='default' disabled>
					Actividad
				</option>
				<option value='All'>Con Actividades</option>
				<option value='Crated'>Sin Actividades</option>
			</select>
		</div>
	)
}

export default SelectActivity
