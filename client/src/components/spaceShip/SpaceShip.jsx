import style from './spaceShip.module.css'
import { Link } from 'react-router-dom'

const SpaceShip = () => {
	return (
		<div className={style.spaceShip}>
			<section className={style.space}>
				<div className={style.stars}>
					<div className={style.starsBack}></div>
					<div className={style.starsMiddle}></div>
					<div className={style.starsFront}></div>
				</div>
				<Link to='/home'>
					<div className={style.rocket}>
						<div className={style.fuselage}>
							<div className={style.nose}></div>
							<div className={style.head}>
								<span className={style.window}></span>
							</div>
							<div className={style.neck}></div>
							<div className={style.body}></div>
							<div className={style.reactor}></div>
							<div className={style.fire}>
								<div className={style.spark2}></div>
								<div className={style.spark1}></div>
								<div className={style.spark3}></div>
								<div className={style.spark4}></div>
								<div className={style.spark5}></div>
								<div className={style.spark6}></div>
							</div>
						</div>
						<div className={style.leftFin}></div>
						<div className={style.leftFinEnd}></div>
						<div className={style.rightFin}></div>
						<div className={style.rightFinEnd}></div>
					</div>
				</Link>
			</section>
		</div>
	)
}

export default SpaceShip
