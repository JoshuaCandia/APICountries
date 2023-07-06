import style from './home.module.css'

import Cards from '../../components/cards/Cards'

const Home = () => {
	return (
		<div className={style.home}>
			<div className={style.title}>
				<h1>React Countries</h1>
			</div>

			<Cards />
		</div>
	)
}

export default Home
