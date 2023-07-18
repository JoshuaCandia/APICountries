import style from './pagination.module.css'

const Pagination = ({
	currentPage,
	countriesPerPage,
	paginate,
	handlerPrev,
	handlerNext,
	countries,
	setCurrentPage,
	inputPage,
	setInputPage,
}) => {
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
		} else {
			alert('Debe ingresar un número entre 1 y ' + pageNum.length)
			setInputPage(currentPage)
		}
		scrollToTop()
	}
	const scrollToTop = () => {
		window.scrollTo({ top: 100, behavior: 'smooth' })
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
				<div className={style.changePageDiv}>
					<input
						className={style.inputPage}
						onChange={handleInputChange}
						type='text'
						value={inputPage}
						placeholder={`${currentPage}`}
					/>
					<button className={style.buttonPage} onClick={goToPage}>
						➡
					</button>
				</div>
				<p>{` de ${pageNum.length}`}</p>
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
