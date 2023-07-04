import style from './landing.module.css'
import { Link } from 'react-router-dom'
const Landing = () => {
	return (
		<div className={style.home}>
			<button className={style.buttonLanding}>
				<Link to='/home'>Home</Link>
			</button>
		</div>
	)
}

export default Landing
