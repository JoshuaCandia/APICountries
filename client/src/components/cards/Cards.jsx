import style from './cards.module.css'

import { getCountries } from '../../redux/actions/actions'

import Card from '../card/Card'
import NavCards from '../navCards/NavCards'
import Pagination from '../pagination/Pagination'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cards = () => {
	const dispatch = useDispatch()

	useSelector(state => state.order)

	const countries = useSelector(state => state.countries)

	const [currentPage, setCurrentPage] = useState(1) // State de la pagina actual
	const [inputPage, setInputPage] = useState('') // State del input de pagina

	const countriesPerPage = 12
	const firstCountryIndex = (currentPage - 1) * countriesPerPage
	const sliceIndex = firstCountryIndex + countriesPerPage
	const currentCountries = countries.slice(firstCountryIndex, sliceIndex)

	// Funcion de Paginado
	const paginate = pageNumber => {
		setCurrentPage(pageNumber)
	}

	// handlers de Paginado
	const handlerPrev = () => {
		setCurrentPage(currentPage - 1)
		setInputPage(currentPage - 1)
	}

	const handlerNext = () => {
		setCurrentPage(currentPage + 1)
		setInputPage(currentPage + 1)
	}

	useEffect(() => {
		if (!countries.length) dispatch(getCountries())
	}, [])

	return (
		<div className={style.gridCards}>
			<div className={style.navDiv}>
				<NavCards setCurrentPage={setCurrentPage} setInputPage={setInputPage} />
			</div>

			<Pagination
				currentPage={currentPage}
				countriesPerPage={countriesPerPage}
				paginate={paginate}
				handlerPrev={handlerPrev}
				handlerNext={handlerNext}
				countries={countries?.length}
				setCurrentPage={setCurrentPage}
				inputPage={inputPage}
				setInputPage={setInputPage}
			/>
			<div className={style.cards}>
				{currentCountries?.map(country => (
					<Card
						key={country.id}
						id={country.id}
						flag={country.flag}
						population={country.population}
						commonName={country.commonName}
						continent={country.continent}
					/>
				))}
			</div>
		</div>
	)
}

export default Cards
