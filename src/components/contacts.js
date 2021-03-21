import React from 'react';

export const Contacts = () => (
	<section className='my-2  bg-white' id='contatti'>
		<div className='w-full sm:w-10/12 md:w-6/12 m-auto p-3 sm:rounded-2xl bg-pink-300'>
			<h2 className='text-center text-5xl font-semibold my-4'>Contatti</h2>
			<p className='text-center font-light'>
				Se avete bisogno di contattarci, questi sono i nostri recapiti:
			</p>
			<p className='text-center text-lg'>E-mail: casper.liguria@gmail.com</p>
			<p className='text-center text-lg'>Tel: +39 338 229 5037</p>

			<div className='my-3'>
				<p className='text-center font-light'>
					Altrimenti puoi contattarci riempiendo i campi qui sotto:
				</p>
				<form
					method='post'
					netlify-honeypot='bot-field'
					data-netlify='true'
					name='contact'
					className='flex flex-col items-center'
				>
					<input type='hidden' name='bot-field' />
					<input type='hidden' name='form-name' value='contact' />
					<label
						for='email'
						className='w-10/12 sm:w-6/12 mt-2 text-lg text-center'
					>
						La tua e-mail
						<br />
						<input
							type='email'
							name='email'
							className='w-full h-8 px-4 rounded-2xl'
							required
						/>
					</label>

					<label
						for='nome'
						className='w-10/12 sm:w-6/12 mt-2 text-lg text-center'
					>
						Il tuo nome
						<br />
						<input
							type='text'
							name='nome'
							className='w-full h-8 px-4 rounded-2xl'
							required
						/>
					</label>

					<label
						for='text'
						className='w-10/12 sm:w-6/12 mt-2 text-lg text-center'
					>
						Dicci qual è il problema:
						<br />
						<textarea
							type='textarea'
							name='text'
							className='w-full h-16 px-4 rounded-2xl focus:outline-none focus:ring-2'
							required
						/>
					</label>

					<button
						type='submit'
						className='my-6 p-2 px-4 w-8/12 sm:w-4/12 rounded-2xl text-lg font-semibold bg-pink-500 focus:outline-none focus:ring-2'
					>
						Contattaci
					</button>
				</form>
			</div>
		</div>
	</section>
);
