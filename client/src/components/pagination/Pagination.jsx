import style from './pagination.module.css'
import { Link } from 'react-router-dom'
const Pagination = ({ countriesPerPage, allCountries, paginate }) => {
	const pageNumbers = []
	console.log(allCountries)
	console.log(countriesPerPage)

	for (let i = 1; i <= Math.ceil(allCountries.length / countriesPerPage); i++) {
		pageNumbers.push(i)
	}
	return (
		<nav>
			<ul className={style.ulPagination}>
				{pageNumbers &&
					pageNumbers.map(number => (
						<li key={number} className={style.number}>
							<Link onClick={() => paginate(number)} key={number}>
								{number}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	)
}

export default Pagination
