// Styling
import style from './card.module.css'
import { Link } from 'react-router-dom'

const Card = country => {
	const { id, flag, commonName, continent, population } = country

	return (
		<div className={style.card} key={id}>
			<Link to={`/detail/${id}`}>
				<div className={style.flagDiv}>
					<img className={style.flag} src={flag} alt={commonName} />
				</div>

				<div className={style.infoDiv}>
					<h3 className={style.countryTitle}>{commonName}</h3>
					<div className={style.details}>
						<h5 className={style.continent}>Continente: {continent}</h5>
						<h5 className={style.population}>Población: {population}</h5>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Card
