import style from './selectNames.module.css'

const SelectNames = () => {
	return (
		<div className={style.selectNames}>
			<select name='nombres' id='selectNombres' defaultValue='default'>
				<option value='default' disabled>
					Nombre
				</option>
				<option value='ASC'>A-Z</option>
				<option value='DESC'>Z-A</option>
			</select>
		</div>
	)
}

export default SelectNames
