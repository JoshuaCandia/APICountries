import style from './buttonLogOut.module.css'
import { Link } from 'react-router-dom'
const ButtonLogOut = () => {
	return (
		<div className={style.ButtonLogOut}>
			<Link to={'/'}>
				<button>Log Out</button>
			</Link>
		</div>
	)
}

export default ButtonLogOut
