import React from 'react';
import './mainHero.style.scss';
import mainHero from '../../images/mainHero.jpg';
import CAsPerLogo from '../../images/CAsPer-logo.svg';

export const MainHero = () => (
	<section className='main-hero'>
		<div className='main-hero-container'>
			<h1 className='main-hero-heading'>
				Centro Antiviolenza <br /> sulla Persona
			</h1>
			<div className='main-hero-logo'>
				<img src={CAsPerLogo} alt='CAsPer logo' />
				<h2>C.A.s.Per.</h2>
			</div>
			<p>
				Non facciamo distinzione tra uomini o donne, siamo rivolti a tutto il
				genere umano, a chi si sente maltrattato, escluso, bullizzato sia
				fisicamente che sul web. Siete liberi di chiedere, segnalare o se avete
				necessità, semplicemente di parlare e sfogarvi. Siamo disponibili ad
				ascoltarvi in qualsiasi momento.
			</p>
			<div>
				<button>Contattaci</button>
				<button>I nostri articoli</button>
			</div>
		</div>
	</section>
);
