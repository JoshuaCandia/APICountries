// Styling
import style from './card.module.css'
import { Link } from 'react-router-dom'

const Card = country => {
	const { id, flag, commonName, continent, population, escudo } = country

	return (
		<div className={style.card} key={id}>
			<Link to={`/detail/${id}`}>
				<div className={style.cardInner}>
					<div className={style.cardFront}>
						<div className={style.flagDiv}>
							<img className={style.flag} src={flag} alt={commonName} />
						</div>
						<h3 className={style.countryTitle}>{commonName}</h3>
						<div className={style.infoDiv}>
							<h5 className={style.continent}>Continente: {continent}</h5>
							<h5 className={style.population}>Población: {population}</h5>
						</div>
					</div>
					<div className={style.cardBack}>
						{escudo ? (
							<img className={style.escudo} src={escudo} alt='' />
						) : (
							<h5 style={{ textAlign: 'center' }}>
								No me quieren tanto como para darme un escudo
							</h5>
						)}
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Card
