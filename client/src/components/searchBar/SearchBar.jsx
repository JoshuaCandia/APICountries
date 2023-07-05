import style from './searchbar.module.css'
import { useState } from 'react'
// import axios from 'axios'

const SearchBar = () => {
	// State de busqueda de countries
	// eslint-disable-next-line no-unused-vars
	const [countries, setCountries] = useState([])

	// const onSearch = async name => {
	// 	try {
	// 		const { data } = await axios(
	// 			`http://localhost:3001/countries/name?name=${name}`
	// 		)
	// 		setCountries(data)
	// 	} catch (error) {
	// 		alert('El pais no existe')
	// 	}
	// }

	const [name, setName] = useState('')

	const handleChange = event => {
		setName(event.target.value)
	}
	return (
		<div className={style.searchBar}>
			<input
				type='search'
				value={name}
				name='inputSearchBar'
				className={style.searchBar}
				onChange={handleChange}
				placeholder='Busca paises acá...'
				onClick={() => {
					// onSearch(name)
					setName('')
				}}
			/>
			<button>Search</button>
		</div>
	)
}

export default SearchBar
