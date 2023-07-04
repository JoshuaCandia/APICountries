// Styling
import style from './card.module.css'

const Card = country => {
	const { id, flag, name, continent } = country

	return (
		<div className={style.card} key={id}>
			<div className={style.flagDiv}>
				<img className={style.flag} src={flag} alt={name} />
			</div>
			<div className={style.infoDiv}>
				<h2 className={style.countryTitle}>{name}</h2>
				<p>Continent:{continent}</p>
			</div>
		</div>
	)
}

export default Card
