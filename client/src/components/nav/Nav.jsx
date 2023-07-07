import style from './nav.module.css'

// Import components
import ButtonCreate from '../../components/buttons/buttonCreate/ButtonCreate'
import Title from '../Title/Title'

// Import hooks
import { Link, useLocation } from 'react-router-dom'
import ButtonHome from '../buttons/buttonHome/ButtonHome'

const Nav = () => {
	const location = useLocation()
	return (
		<div className={style.nav}>
			<Link to='/home'>
				<Title />
			</Link>
			<div className={style.buttons}>
				{location.pathname !== '/home' && <ButtonHome />}
				<ButtonCreate />
			</div>
		</div>
	)
}

export default Nav
