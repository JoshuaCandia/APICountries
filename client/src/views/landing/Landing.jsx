import style from './landing.module.css'
import { Link } from 'react-router-dom'
const Landing = () => {
	return (
		<div className={style.home}>
			<div className={style.buttonDiv}>
				<button className={style.buttonLanding}>
					<Link to='/home'>Home</Link>
				</button>
			</div>
		</div>
	)
}

export default Landing
