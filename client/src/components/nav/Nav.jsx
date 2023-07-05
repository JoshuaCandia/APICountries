import style from './nav.module.css'
import { getCountries } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'

// import Selects
import SelectActivity from '../selects/selectActivity/SelectActivity'
import SelectNames from '../selects/selectNames/SelectNames'
import SelectContinent from '../selects/selectContinent/SelectContinent'
import ButtonRestore from '../buttons/buttonNav/ButtonRestore'

const Nav = () => {
	const dispatch = useDispatch()

	const handleClick = event => {
		event.preventDefault()
		dispatch(getCountries())
	}

	return (
		<div className={style.nav}>
			<div className={style.button}>
				<ButtonRestore onClick={event => handleClick(event)} />
			</div>

			<div className={style.selectors}>
				<SelectContinent />
				<SelectNames />
				<SelectActivity />
			</div>
		</div>
	)
}
export default Nav
