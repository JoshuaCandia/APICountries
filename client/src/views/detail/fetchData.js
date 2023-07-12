import axios from 'axios'

const fetchData = async (id, setData, setVecinos, vecinos) => {
	try {
		// Data del País
		const { data } = await axios(`http://localhost:3001/countries/${id}`)
		setData(data)

		// Nombre de los vecinos
		if (data.borders) {
			const vecinosId = data.borders
				?.slice(1, data.borders.length - 1)
				.split(',')

			if (vecinosId.length > 0 && vecinos.length === 0) {
				for (const vecino of vecinosId) {
					const { data } = await axios(
						`http://localhost:3001/countries/${vecino}`
					)

					setVecinos(prevVecinos => [...prevVecinos, data])
				}
			}
		}
	} catch (error) {
		console.error(error)
	}
}

export default fetchData
