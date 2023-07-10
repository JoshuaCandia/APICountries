// Styling
import style from './card.module.css'
import { Link } from 'react-router-dom'

const Card = country => {
	const { id, flag, commonName, continent } = country

	return (
		<div className={style.card} key={id}>
			<Link to={`/detail/${id}`}>
				<div className={style.flagDiv}>
					<img className={style.flag} src={flag} alt={commonName} />
				</div>

				<div className={style.infoDiv}>
					<h3 className={style.countryTitle}>{commonName}</h3>
					<h5 className={style.continent}>Continent:{continent}</h5>
				</div>
			</Link>
		</div>
	)
}

export default Card
