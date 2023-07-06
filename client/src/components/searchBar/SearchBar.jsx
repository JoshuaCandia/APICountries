import style from './searchbar.module.css'
import { useState } from 'react'

// Import buttons
import ButtonSearch from '../buttons/buttonSearch/ButtonSearch'

const SearchBar = () => {
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
				className={style.input}
				onChange={handleChange}
				placeholder='Busca paises acá...'
				onClick={() => {
					setName('')
				}}
			/>
			<ButtonSearch setName={setName} />
		</div>
	)
}

export default SearchBar
