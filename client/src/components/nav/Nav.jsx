import style from './nav.module.css'

// import Selects
import SelectActivity from '../selects/selectActivity/SelectActivity'
import SelectNames from '../selects/selectNames/SelectNames'
import SelectContinent from '../selects/selectContinent/SelectContinent'
import ButtonRestore from '../buttons/buttonNav/ButtonRestore'
import SearchBar from '../searchBar/SearchBar'

const Nav = () => {
	return (
		<div className={style.nav}>
			<SearchBar />

			<ButtonRestore />

			<div className={style.selectors}>
				<SelectContinent />
				<SelectNames />
				<SelectActivity />
			</div>
		</div>
	)
}
export default Nav
