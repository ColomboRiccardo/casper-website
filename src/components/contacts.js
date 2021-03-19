import React from 'react';

export const Contacts = () => (
	<section className='bg-pink-300'>
		<h2 className=' text-center text-5xl my-4'>Contatti</h2>
		<p className='text-center'>
			Se avete bisogno di contattarci, questi sono i nostri recapiti:
		</p>
		<p className='text-center'>E-mail: casper.liguria@gmail.com</p>
		<p className='text-center'>Tel: +39 338 229 5037</p>
		<p className='text-center'>
			Altrimenti puoi contattarci riempiendo i campi qui sotto:
		</p>

		<div>
			<form
				method='post'
				netlify-honeypot='bot-field'
				data-netlify='true'
				name='contact'
				className='flex flex-col items-center'
			>
				<input type='hidden' name='bot-field' />
				<input type='hidden' name='form-name' value='contact' />
				<label for='email'>La tua e-mail</label>
				<input type='email' name='email' />
				<label for='nome'>Il tuo nome</label>
				<input type='text' name='nome' />
				<label for='text'>Dicci qual è il problema:</label>
				<input type='textarea' name='text' />
				<button type='submit'>Contattaci</button>
			</form>
		</div>
	</section>
);
