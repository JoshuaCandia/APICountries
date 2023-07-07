import style from './detail.module.css'

import Nav from '../../components/nav/Nav'

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
	const { flag, name, continent } = data
	return (
		<div className={style.detail}>
			<Nav />
			<div>
				<img src={flag} alt={name} />
				<h3>continent: {continent}</h3>
			</div>
		</div>
	)
}

export default Detail
