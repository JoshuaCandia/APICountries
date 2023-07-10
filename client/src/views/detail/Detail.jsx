import style from './detail.module.css'

import Nav from '../../components/nav/Nav'
import ButtonHome from '../../components/buttons/buttonHome/ButtonHome'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
	const { id } = useParams()

	// State Local par arecibir la informacion del country
	const [data, setData] = useState({})

	// Funcion para traer la informacion del country
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios(`http://localhost:3001/countries/${id}`)

				setData(data)
			} catch (error) {
				console.error(error)
			}
		}
		// Ejecuto la funcion en el mount
		fetchData()
	}, [])
	const {
		flag,
		commonName,
		officialName,
		continent,
		capital,
		area,
		population,
		region,
		borders,
	} = data
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
					<h2 className={style.countryName}>{commonName} </h2>

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
						</div>
					</div>
					<p>
						Id de Paises Vecinos:<span>{borders}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Detail
