import style from './pagination.module.css'
import { useState } from 'react'

const Pagination = ({
	currentPage,
	countriesPerPage,
	paginate,
	handlerPrev,
	handlerNext,
	countries,
	setCurrentPage,
}) => {
	const [inputPage, setInputPage] = useState(currentPage)

	const pageNum = []
	for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
		pageNum.push(i)
	}

	const handleInputChange = event => {
		setInputPage(event.target.value)
	}

	const goToPage = () => {
		const parsedInput = parseInt(inputPage, 10)
		if (parsedInput >= 1 && parsedInput <= pageNum.length) {
			setCurrentPage(parsedInput)
			setInputPage('')
		}
	}

	return (
		<div className={style.pag}>
			<div className={style.prev}>
				<button onClick={handlerPrev} disabled={currentPage === 1}>
					PREV
				</button>
			</div>

			<div className={style.numbers}>
				{currentPage > pageNum.length && paginate(1)}
				<p>
					<input
						className={style.inputPage}
						onChange={handleInputChange}
						value={inputPage}
						type='text'
						placeholder={`${currentPage}`}
					/>
					<button className={style.buttonPage} onClick={goToPage}>
						➡
					</button>
					{` de ${pageNum.length}`}
				</p>
			</div>

			<div className={style.Next}>
				<button onClick={handlerNext} disabled={currentPage === pageNum.length}>
					NEXT
				</button>
			</div>
		</div>
	)
}

export default Pagination
