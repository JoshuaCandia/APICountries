import style from './buttonHome.module.css'
import { Link } from 'react-router-dom'
const ButtonHome = () => {
	return (
		<div className={style.buttonHome}>
			<Link to='/home'>
				<button>Home</button>
			</Link>
		</div>
	)
}

export default ButtonHome
