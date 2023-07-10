import style from './searchbar.module.css'

import { filterCountriesBySearch } from '../../redux/actions/actions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import lupa from '../../assets/lupa.png'
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
			<button
				className={style.buttonSearch}
				onClick={handleSearch}
				type='button'
			>
				<img className={style.lupa} src={lupa} alt='' />
			</button>
			<input
				className={style.input}
				type='search'
				autoComplete='off'
				value={name}
				name='inputSearchBar'
				onChange={handleChange}
				placeholder='Busca paises acá...'
			/>
		</div>
	)
}

export default SearchBar
