import style from './searchbar.module.css'

import { filterCountriesBySearch } from '../../redux/actions/actions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// Import buttons

const SearchBar = () => {
	const [name, setName] = useState('')

	const dispatch = useDispatch()

	const handleChange = event => {
		setName(event.target.value)
	}
	const handleSearch = event => {
		event.preventDefault()
		dispatch(filterCountriesBySearch(name))
		setName('')
	}
	return (
		<div className={style.searchBar}>
			<input
				type='search'
				value={name}
				name='inputSearchBar'
				className={style.input}
				onChange={handleChange}
				placeholder='Busca paises acá...'
			/>
			<button onClick={handleSearch} type='button'>
				Buscar
			</button>
		</div>
	)
}

export default SearchBar
