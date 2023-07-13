import axios from 'axios'

const fetchData = async (id, setData, setVecinos) => {
	try {
		// Data del País
		const { data } = await axios(`http://localhost:3001/countries/${id}`)
		setData(data)

		// Nombre de los vecinos
		if (data.borders.length > 0) {
			const vecinosId = data.borders
				?.slice(1, data.borders.length - 1)
				.split(',')

			Promise.all(
				// Promise All para que sea asincrono y me traiga todos los vecinos juntos
				vecinosId.map(vecino =>
					axios
						.get(`http://localhost:3001/countries/${vecino}`)
						.then(response => response.data)
				)
			).then(vecinosData => {
				setVecinos(vecinosData)
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export default fetchData
