import style from './buttonRestore.module.css'

import { getCountries } from '../../../redux/actions/actions'
import { useDispatch } from 'react-redux'

const ButtonRestore = ({ setMenuOpen, setCurrentPage }) => {
	const dispatch = useDispatch()

	const handleClick = event => {
		event.preventDefault()
		dispatch(getCountries())
		setMenuOpen(false)
		setCurrentPage(1)
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
