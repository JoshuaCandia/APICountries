import style from './cards.module.css'

import Card from '../card/Card'
import axios from 'axios'

// Import Hooks
import { useEffect, useState } from 'react'
const Cards = () => {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const { data } = await axios.get('http://localhost:3001/countries')
				setCountries(data)
			} catch (error) {
				console.error('Error fetching countries:', error)
			}
		}
		fetchCountries()
	}, [])
	console.log(countries)

	return (
		<div className={style.cards}>
			{countries.map(country => (
				<Card
					key={country.id}
					flag={country.flag}
					name={country.name}
					continent={country.continent}
				/>
			))}
		</div>
	)
}

export default Cards
