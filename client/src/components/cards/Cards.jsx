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

	// eslint-disable-next-line no-unused-vars
	const [currentPage, setCurrentPage] = useState(1)

	const countriesPerPage = 8
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
	}

	const handlerNext = () => {
		setCurrentPage(currentPage + 1)
	}

	useEffect(() => {
		dispatch(getCountries())
	}, [])

	return (
		<div className={style.gridCards}>
			<div className={style.navDiv}>
				<NavCards setCurrentPage={setCurrentPage} />
			</div>

			<div className={style.cards}>
				{currentCountries?.map(country => (
					<Card
						key={country.id}
						id={country.id}
						flag={country.flag}
						commonName={country.commonName}
						continent={country.continent}
					/>
				))}
			</div>

			<Pagination
				currentPage={currentPage}
				countriesPerPage={countriesPerPage}
				paginate={paginate}
				handlerPrev={handlerPrev}
				handlerNext={handlerNext}
				countries={countries?.length}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	)
}

export default Cards
