import style from './cards.module.css'

import { getCountries } from '../../redux/actions/actions'

import SearchBar from '../../components/searchBar/SearchBar'
import Card from '../card/Card'

// Import Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cards = () => {
	const dispatch = useDispatch()
	const allCountries = useSelector(state => state.countries)

	useEffect(() => {
		dispatch(getCountries())
	}, [])

	return (
		<div className={style.gridCards}>
			<SearchBar />

			<div className={style.cards}>
				{allCountries.map(country => (
					<Card
						key={country.id}
						flag={country.flag}
						name={country.name}
						continent={country.continent}
					/>
				))}
			</div>
		</div>
	)
}

export default Cards

/*	const [countries, setCountries] = useState([])

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
	}, []) */
