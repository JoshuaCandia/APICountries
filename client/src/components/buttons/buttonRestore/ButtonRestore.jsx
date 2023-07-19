import style from './buttonRestore.module.css'

import { restore } from '../../../redux/actions/actions'
import { useDispatch } from 'react-redux'

const ButtonRestore = ({ setCurrentPage, setRestore, setInputPage }) => {
	const dispatch = useDispatch()

	const handleClick = event => {
		event.preventDefault()
		dispatch(restore())

		setCurrentPage(1)
		setInputPage(1)
		setRestore(false)
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
