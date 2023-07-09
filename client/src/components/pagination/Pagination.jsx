import style from './pagination.module.css'

const Pagination = ({
	currentPage,
	countriesPerPage,
	paginate,
	handlerPrev,
	handlerNext,
	countries,
}) => {
	const pageNum = []
	for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
		pageNum.push(i)
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
				<p>{`${currentPage} de ${pageNum.length}`}</p>
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
