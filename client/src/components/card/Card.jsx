// Styling
import style from './card.module.css'

const Card = country => {
	const { id, flag, name, continent } = country

	return (
		<div className={style.card}>
			<div key={id}>
				<img className={style.flag} src={flag} alt={name} />
				<h3>{name}</h3>
				<p>Continent:{continent}</p>
			</div>
		</div>
	)
}

export default Card
