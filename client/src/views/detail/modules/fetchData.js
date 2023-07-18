import axios from 'axios'

const fetchData = async (id, setData, setVecinos) => {
	try {
		// Data del País
		const { data } = await axios(`http://localhost:3001/countries/${id}`)

		setData(data.country)
		setVecinos(data.borderCountries)
	} catch (error) {
		console.error(error)
	}
}

export default fetchData
