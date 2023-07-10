import style from './buttonHome.module.css'
import { Link } from 'react-router-dom'
const ButtonHome = () => {
	return (
		<div className={style.buttonHomeDiv}>
			<Link to='/home'>
				<button className={style.buttonHome}>
					{' '}
					<span>&larr;</span> Back
				</button>
			</Link>
		</div>
	)
}

export default ButtonHome
