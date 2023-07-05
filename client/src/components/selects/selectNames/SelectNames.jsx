import style from './selectNames.module.css'

const SelectNames = () => {
	return (
		<div className={style.selectNames}>
			<select name='nombres' id='selectNombres' defaultValue='default'>
				<option value='default' disabled>
					Filtra por nombre
				</option>
				<option value='ASC'>Ascendente</option>
				<option value='DESC'>Descendente</option>
			</select>
		</div>
	)
}

export default SelectNames
