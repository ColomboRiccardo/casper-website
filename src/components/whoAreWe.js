import React from 'react';
import casperImage from '../images/casper-image.jpg';

export const WhoAreWe = () => (
	<section className='my-6'>
		<div className='w-8/12 m-auto flex flex-row items-center justify-center'>
			<div className='mx-4'>
				<img src={casperImage} className='w-full' />
			</div>
			<div className='w-10/12 mx-4 pt-16'>
				<h2 className='text-4xl sm:text-5xl font-semibold'>Perchè casper?</h2>
				<p className=' text-lg'>
					Questo acronimo è anche il nome di un piccolo fantasma, che con la sua
					dolcezza, ma anche con la sua determinazione è riuscito a sconfiggere
					i fantasmi cattivi che lo deridevano, che lo mettevano sempre in un
					angolo, lo emarginavano. CAsPer con il suo cuore di bambino è riuscito
					a squarciare il velo di indifferenza, di cattiveria, di violenza che
					ci sta soffocando.
				</p>
			</div>
		</div>
		<div>
			<h2 className=' text-center text-4xl sm:text-5xl font-semibold my-4'>
				Chi siamo
			</h2>
			<p className='text-center'>
				CAsPer nasce e si costituisce nel 2013 ma, alla luce dei fatti che
				accadono nella nostra società solo ora ha deciso di agire, prefiggendosi
				di collaborare in sinergia con le istituzioni ed i Centri Antiviolenza
				presenti sul territorio. CAsPer si rivolge a uomini e donne che vivono
				sul territorio e subiscono violenza e/o maltrattamenti intra ed extra
				familiari. CAsPer mira a creare migliori condizioni di vita e di
				benessere alle persone senza distinzione di sesso, orientamento
				religioso, etnia , insomma sulle persone, interviene nell’ambito
				familiare, scolastico ( bullismo), sulla violenza tra coetanei, violenza
				assistita, fisica, psicologica e così via.
			</p>
		</div>
	</section>
);
