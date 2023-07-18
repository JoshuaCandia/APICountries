import style from './detail.module.css'

import Nav from '../../components/nav/Nav'
import ButtonHome from '../../components/buttons/buttonHome/ButtonHome'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import fetchData from './modules/fetchData'

const Detail = () => {
	const { id } = useParams()

	// State Local par arecibir la informacion del country
	const [data, setData] = useState({})
	const [vecinos, setVecinos] = useState([])

	useEffect(() => {
		fetchData(id, setData, setVecinos)
	}, [id])

	const {
		Activities,
		flag,
		commonName,
		officialName,
		continent,
		capital,
		area,
		population,
		region,
		timezone,
	} = data

	// Borro los {} que me ponen en los strings pq mi api es un asco =)
	const timezoneString = timezone?.slice(1, timezone.length - 1).split(',')[0]

	return (
		<div className={style.detail}>
			<Nav />
			<div className={style.back}>
				<ButtonHome />
			</div>
			<div className={style.detailDiv}>
				<div className={style.flagDiv}>
					<img className={style.flag} src={flag} alt={`${commonName} flag`} />
				</div>
				<div className={style.dataDiv}>
					<h2 className={style.countryName}>
						<Link
							to={`https://www.google.com/search?q=${commonName}`}
							target='_blank'
						>
							{commonName}
						</Link>
					</h2>

					<div className={style.infoFlex}>
						<div className={style.info1}>
							{officialName ? (
								<p>
									Nombre oficial: <span> {officialName}</span>
								</p>
							) : null}
							<p>
								Capital: <span>{capital}</span>
							</p>
							<p>
								Continente: <span>{continent}</span>
							</p>

							<p>Zona Horaria: {timezoneString}</p>
						</div>
						<div className={style.info2}>
							<p>
								Region: <span>{region}</span>
							</p>
							<p>
								Poblacion: <span>{population}</span>
							</p>
							<p>
								Area: <span>{area}</span>
							</p>
							{Activities && Activities.length !== 0 ? (
								<p>
									Actividades:{' '}
									<span>
										{Activities.map(activity => activity.name).join(', ')}
									</span>
								</p>
							) : null}
						</div>
					</div>
				</div>
			</div>
			{vecinos.length > 0 && (
				<div className={style.paisesVecinos}>
					<p className={style.pVecinos}>Paises Vecinos:</p>
					{vecinos.map(country => (
						<Link key={country.idVecino} to={`/detail/${country.idVecino}`}>
							<span className={style.vecino} onClick={() => setVecinos([])}>
								{` ${country.name}`}
							</span>
						</Link>
					))}
				</div>
			)}
		</div>
	)
}

export default Detail
