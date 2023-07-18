import style from './navCards.module.css'
import { useEffect, useState } from 'react'
// import Selects
import SelectActivity from '../selects/selectActivity/SelectActivity'
import SelectNamesAndPopulation from '../selects/selectNamesAndPopulation/SelectNamesAndPopulation'
import SelectContinent from '../selects/selectContinent/SelectContinent'

import ButtonCreate from '../../components/buttons/buttonCreate/ButtonCreate'
import ButtonRestore from '../buttons/buttonRestore/ButtonRestore'
import SearchBar from '../searchBar/SearchBar'

const NavCards = ({ setCurrentPage, setInputPage }) => {
	const [restore, setRestore] = useState(true)

	useEffect(() => {
		setRestore(true)
	}, [restore])
	return (
		<div className={style.nav}>
			<SearchBar />

			<div className={style.menu}>
				{restore && (
					<div className={style.selectors}>
						<div className={style.filtrarPaises}>
							<SelectContinent
								setInputPage={setInputPage}
								setCurrentPage={setCurrentPage}
							/>
							<SelectActivity
								setInputPage={setInputPage}
								setCurrentPage={setCurrentPage}
							/>
						</div>

						<div className={style.ordenarPaises}>
							<SelectNamesAndPopulation />
						</div>
					</div>
				)}
				<div className={style.restaurarDiv}>
					<ButtonRestore
						restore={restore}
						setRestore={setRestore}
						setCurrentPage={setCurrentPage}
						setInputPage={setInputPage}
					/>
				</div>
			</div>
			<ButtonCreate />
		</div>
	)
}
export default NavCards
