import style from './pagination.module.css'
import { Link } from 'react-router-dom'

const Pagination = ({ countriesPerPage, countries, paginate }) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
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
