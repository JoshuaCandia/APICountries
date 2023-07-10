import style from './landing.module.css'
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import SpaceShip from '../../components/spaceShip/SpaceShip'

// import assets

import astronaut from '../../assets/astronaut2.svg'

const Landing = () => {
	const [text] = useTypewriter({
		words: [
			'¡Hola señor Marciano!',
			'Soy un Developer de la tierra C-137',
			'Dejame mostrarte algunos paises =)',
			'Hace click en mi nave para acompañarme!',
		],
		loop: false,
		typeSpeed: 90,
		deleteSpeed: 90,
	})

	return (
		<div className={style.home}>
			<div className={style.centralDiv}>
				<SpaceShip />
				<div className={style.contenedorTexto}>
					<h2 className={style.charla}>
						<span className={style.span1}> {text}</span>
						<span className={style.span2}>
							<Cursor cursorStyle='|' />
						</span>
					</h2>
				</div>
				<div className={style.contenedorImg}>
					<img className={style.astronaut} src={astronaut} alt='' />
				</div>

				<button className={style.buttonLanding}>
					<Link to='/home'>Ingresar a la atmosfera</Link>
				</button>
			</div>
		</div>
	)
}

export default Landing
