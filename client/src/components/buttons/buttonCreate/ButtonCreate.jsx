import style from './buttonCreate.module.css'
import { Link } from 'react-router-dom'

const ButtonCreate = () => {
	return (
		<div className={style.create}>
			<Link to='/create'>
				<button>Crear</button>
			</Link>
		</div>
	)
}

export default ButtonCreate
