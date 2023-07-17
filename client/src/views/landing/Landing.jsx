import style from './landing.module.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useState, useEffect } from 'react'
import SpaceShip from '../../components/spaceShip/SpaceShip'

// import assets
import astronaut from '../../assets/astronaut2.svg'

const Landing = () => {
	const [showClickSpan, setShowClickSpan] = useState(false)

	const [text] = useTypewriter({
		words: [
			'¡Hola señor Marciano!',
			'Soy un Developer de la tierra C-137',
			'Dejame mostrarte algunos paises =)',
			'Hace click en mi nave para acompañarme! ANASHEI',
		],
		loop: false,
		typeSpeed: 60,
		deleteSpeed: 60,
	})

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowClickSpan(true)
		}, 15000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div className={style.home}>
			<div className={style.centralDiv}>
				<SpaceShip />
				<div className={style.contenedorTexto}>
					<h2 className={style.charla}>
						<span className={style.span1}>{text}</span>
						<span className={style.span2}>
							<Cursor cursorStyle='|' />
						</span>
					</h2>
				</div>
				<div className={style.contenedorImg}>
					<img className={style.astronaut} src={astronaut} alt='' />
				</div>
				{showClickSpan && (
					<span className={style.clickSpan}>
						Click en la nave para ingresar a la tierra
					</span>
				)}
			</div>
		</div>
	)
}

export default Landing
