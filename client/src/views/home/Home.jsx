import style from './home.module.css'

import Cards from '../../components/cards/Cards'
import Nav from '../../components/nav/Nav'

const Home = () => {
	return (
		<div className={style.home}>
			<div className={style.title}>
				<h1>React Countries</h1>
			</div>
			<Nav />
			<Cards />
		</div>
	)
}

export default Home
