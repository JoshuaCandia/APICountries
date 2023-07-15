import style from './nav.module.css'

// Import components
import ButtonCreate from '../../components/buttons/buttonCreate/ButtonCreate'
import ButtonLogOut from '../buttons/buttonLogOut/ButtonLogOut'
import Title from '../Title/Title'

// Import hooks
import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<div className={style.nav}>
			<Link to='/home'>
				<Title />
			</Link>
			<div className={style.buttons}>
				<ButtonCreate />
				<ButtonLogOut />
			</div>
		</div>
	)
}

export default Nav
