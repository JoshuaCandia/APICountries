import style from './home.module.css'

import Cards from '../../components/cards/Cards'
import Nav from '../../components/nav/Nav'

const Home = () => {
	return (
		<div className={style.home}>
			<Nav />

			<Cards style={{ position: 'absolute', top: 0, zIndex: 2 }} />
		</div>
	)
}

export default Home
