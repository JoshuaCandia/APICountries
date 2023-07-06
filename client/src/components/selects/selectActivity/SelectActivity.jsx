import style from './selectActivity.module.css'

const SelectActivity = () => {
	return (
		<div className={style.selectActivity}>
			<select name='actividad' id='selectActividad' defaultValue='default'>
				<option value='default' disabled>
					Actividad
				</option>
				<option value='true'>Actividad</option>
				<option value='false'>No Actividad</option>
			</select>
		</div>
	)
}

export default SelectActivity
