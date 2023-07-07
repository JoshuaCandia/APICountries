// Styling
import style from './card.module.css'
import { Link } from 'react-router-dom'

const Card = country => {
	const { id, flag, name, continent } = country

	return (
		<div className={style.card} key={id}>
			<Link to={`/detail/${id}`}>
				<div className={style.flagDiv}>
					<img className={style.flag} src={flag} alt={name} />
				</div>

				<div className={style.infoDiv}>
					<h3 className={style.countryTitle}>{name}</h3>
					<h4 className={style.continent}>Continent:{continent}</h4>
				</div>
			</Link>
		</div>
	)
}

export default Card
