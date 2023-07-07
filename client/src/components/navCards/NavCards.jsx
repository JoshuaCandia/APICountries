import style from './navCards.module.css'

// import Selects
import SelectActivity from '../selects/selectActivity/SelectActivity'
import SelectNames from '../selects/selectNames/SelectNames'
import SelectContinent from '../selects/selectContinent/SelectContinent'
import ButtonRestore from '../buttons/buttonRestore/ButtonRestore'
import SearchBar from '../searchBar/SearchBar'

const NavCards = ({ setCurrentPage, handleFilterName }) => {
	return (
		<div className={style.nav}>
			<SearchBar />

			<div className={style.selectors}>
				<SelectContinent />
				<SelectNames setCurrentPage={setCurrentPage} />
				<SelectActivity />
				<ButtonRestore />
			</div>
		</div>
	)
}
export default NavCards
