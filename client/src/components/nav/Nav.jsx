import style from './nav.module.css'

// Import components

import ButtonLogOut from '../buttons/buttonLogOut/ButtonLogOut'
import logo from '../../assets/logo.png'
// Import hooks
import { Link } from 'react-router-dom'
import { restore } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'

const Nav = () => {
	const dispatch = useDispatch()
	return (
		<div className={style.nav}>
			<Link to='/home'>
				<img
					onClick={dispatch(restore())}
					className={style.logo}
					src={logo}
					alt=''
				/>
			</Link>
			<h1>¡Explora el mundo en cada carta!</h1>
			<ButtonLogOut />
		</div>
	)
}

export default Nav
