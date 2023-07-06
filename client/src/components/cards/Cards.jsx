import style from './cards.module.css'

import { getCountries } from '../../redux/actions/actions'

import Card from '../card/Card'
import Nav from '../nav/Nav'

// Import Hooks
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../pagination/Pagination'

const Cards = () => {
	const dispatch = useDispatch()

	// State global countries
	const countries = useSelector(state => state.countries)

	const [currentPage, setCurrentPage] = useState(1)

	// eslint-disable-next-line no-unused-vars
	const [countriesPerPage, setCountriesPerPage] = useState(10)
	const indexOfLastCountry = currentPage * countriesPerPage
	const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
	const currentCountries = countries.slice(
		indexOfFirstCountry,
		indexOfLastCountry
	)

	// Funcion de paginación
	const paginate = pageNumber => {
		setCurrentPage(pageNumber)
	}

	useEffect(() => {
		dispatch(getCountries())
	}, [])

	return (
		<div className={style.gridCards}>
			<div className={style.navDiv}>
				<Nav />
			</div>

			<div className={style.cards}>
				{currentCountries?.map(country => (
					<Card
						key={country.id}
						flag={country.flag}
						name={country.name}
						continent={country.continent}
					/>
				))}
			</div>

			<Pagination
				countries={countries}
				countriesPerPage={countriesPerPage}
				paginate={paginate}
			/>
		</div>
	)
}

export default Cards
