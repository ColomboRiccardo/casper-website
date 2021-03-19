import React from 'react';
import mainHero from '../images/mainHero.jpg';

export const MainHero = () => (
	<section
		className='h-full pt-32 pl-32'
		style={{
			backgroundImage: `url(${mainHero})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center top',
			height: '600px',
		}}
	>
		<div className='w-6/12 p-6 bg-white bg-opacity-60 rounded-2xl'>
			<h1 className='text-5xl'>
				Centro Antiviolenza <br /> sulla Persona
			</h1>
			<h2 className='my-2 text-6xl font-bold '>C.A.s.Per.</h2>
			<p className='my-2 text-lg '>
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
