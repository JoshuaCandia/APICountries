import style from './navCards.module.css'
import { useState, Fragment } from 'react'

// import Selects
import SelectActivity from '../selects/selectActivity/SelectActivity'
import SelectNames from '../selects/selectNames/SelectNames'
import SelectContinent from '../selects/selectContinent/SelectContinent'

import ButtonRestore from '../buttons/buttonRestore/ButtonRestore'
import SearchBar from '../searchBar/SearchBar'

const NavCards = ({ setCurrentPage }) => {
	const [menuOpen, setMenuOpen] = useState(false)

	const handleMenuOpen = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<div className={style.nav}>
			<SearchBar />

			<div className={style.menu}>
				<button className={style.button} onClick={handleMenuOpen}>
					{menuOpen ? (
						<Fragment>
							<span>&rarr;</span> Filtrar Paises
						</Fragment>
					) : (
						<Fragment>
							<span>&larr;</span> Filtrar Paises
						</Fragment>
					)}
				</button>
				{menuOpen && (
					<div className={style.selectors}>
						<SelectContinent setCurrentPage={setCurrentPage} />
						<SelectActivity setCurrentPage={setCurrentPage} />
						<SelectNames />
						<ButtonRestore
							setCurrentPage={setCurrentPage}
							setMenuOpen={setMenuOpen}
						/>
					</div>
				)}
			</div>
		</div>
	)
}
export default NavCards
