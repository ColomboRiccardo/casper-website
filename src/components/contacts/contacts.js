import React from 'react';
import './contacts.style.scss';

export const Contacts = () => (
	<section id='contatti' className='contacts'>
		<h2>Contatti</h2>
		<p>
			Ricorda: non esiste una scala di importanza della violenza subita. Le
			violenze possono avere componenti fisiche o emotive più o meno cruente, ma
			qualsiasi sia stata la gravità della violenza che hai subito, che sia
			accaduta una sola volta o che si sia ripetuta più volte nell’arco del
			tempo, gli effetti dell’abuso sono ancora dentro di te e ti creano dolore
			e sofferenza.
		</p>
		<p>
			Non avere timore a contattarci siamo persone come te e siamo qui per te!
			Garantiamo discrezione, segretezza e anonimato a tutte le persone che si
			rivolgono a noi.
		</p>
		<p className='lighter-paragraph'>
			Se avete bisogno di contattarci, questi sono i nostri recapiti:
		</p>
		<p>E-mail: casper.liguria@gmail.com</p>
		<p>Pec: casperliguria@pec.it</p>
		<p>Tel: +39 338 229 5037</p>
		<div className='contact-form'>
			<p className='lighter-paragraph'>
				Altrimenti puoi contattarci riempiendo i campi qui sotto:
			</p>
			<form
				method='post'
				netlify-honeypot='bot-field'
				data-netlify='true'
				name='contact'
			>
				<input type='hidden' name='bot-field' />
				<input type='hidden' name='form-name' value='contact' />
				<label htmlFor='email'>
					La tua e-mail
					<br />
					<input type='email' name='email' required />
				</label>

				<label htmlFor='nome'>
					Il tuo nome (facoltativo)
					<br />
					<input type='text' name='nome' />
				</label>

				<label htmlFor='text'>
					Dicci qual è il problema:
					<br />
					<textarea type='textarea' name='text' required />
				</label>

				<button type='submit'>Contattaci</button>
			</form>
		</div>
	</section>
);
