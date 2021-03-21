import React from 'react';
import mainHero from '../images/mainHero.jpg';
import CAsPerLogo from '../images/CAsPer-logo.svg';

export const MainHero = () => (
	<section
		className='h-full sm:pt-12 md:pt-16 lg:pt-24 sm:pl-12 md:pl-28 lg:pl-28'
		style={{
			backgroundImage: `url(${mainHero})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center top',
			height: '600px',
		}}
	>
		<div className='h-full sm:h-auto w-full sm:w-11/12 md:w-10/12 lg:w-8/12 sm:p-6 p-4 pt-24 sm:pt-6 bg-white bg-opacity-60 sm:bg-opacity-50 sm:rounded-2xl'>
			<h1 className=' text-4xl sm:text-5xl font-semibold'>
				Centro Antiviolenza <br /> sulla Persona
			</h1>
			<div className='flex flex-row items-center my-1'>
				<img src={CAsPerLogo} alt='CAsPer logo' className='h-10 sm:h-12' />
				<h2 className='m-2 text-5xl sm:text-6xl font-bold '>C.A.s.Per.</h2>
			</div>
			<p className='my-2 text-md sm:text-lg font-medium sm:font-normal'>
				Non facciamo distinzione tra uomini o donne, siamo rivolti a tutto il
				genere umano, a chi si sente maltrattato, escluso, bullizzato sia
				fisicamente che sul web. Siete liberi di chiedere, segnalare o se avete
				necessità, semplicemente di parlare e sfogarvi. Siamo disponibili ad
				ascoltarvi in qualsiasi momento.
			</p>
			<div className='flex flex-row'>
				<button className='my-2 p-2 px-4 rounded-2xl text-lg font-semibold bg-pink-400'>
					Contattaci
				</button>
				<button className='m-2 p-2 px-4 rounded-2xl text-lg bg-white'>
					I nostri articoli
				</button>
			</div>
		</div>
	</section>
);
