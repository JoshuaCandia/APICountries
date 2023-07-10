import style from './buttonRestore.module.css'

import { getCountries } from '../../../redux/actions/actions'
import { useDispatch } from 'react-redux'

const ButtonRestore = () => {
	const dispatch = useDispatch()

	const handleClick = event => {
		event.preventDefault()
		dispatch(getCountries())
	}

	return (
		<div className={style.buttonRestore}>
			<button className={style.button} onClick={event => handleClick(event)}>
				Restaurar
			</button>
		</div>
	)
}

export default ButtonRestore
