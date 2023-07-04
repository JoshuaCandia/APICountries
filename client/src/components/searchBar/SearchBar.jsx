import style from './searchbar.module.css'

const SearchBar = () => {
	return (
		<div className={style.searchBar}>
			<input type='text' />
			<button>Search</button>
		</div>
	)
}

export default SearchBar
