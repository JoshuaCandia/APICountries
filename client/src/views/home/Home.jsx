import Cards from '../../components/cards/Cards'
import SearchBar from '../../components/searchBar/SearchBar'
import style from './home.module.css'

const Home = () => {
	return (
		<div className={style.home}>
			<SearchBar />
			<h1>Countries</h1>
			<Cards />
		</div>
	)
}

export default Home
